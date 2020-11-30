const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const authServices = require('../services/authServices');

const yup = require('yup');
const { where } = require('../database/index.js');
const knex = require('../database/index.js');
const auth = require('../services/authServices');
const aws = require('aws-sdk');

const s3 = new aws.S3();
const unlinkAsync = promisify(fs.unlink);

class publicationController {
  async store(req, res){

    const userData =  await authServices.decodeToken(req.headers.authorization);
    req.body['idUsuario'] = userData.data.idUsuario;

    // se nenhum arquivo for enviado retorna um erro
    if (req.files.length == 0) return res.status(400).send({ error: "Nenhuma foto foi enviada" }) 

    // se alguma das imagens possuir mais de 5mb ele retorna um erro

    await knex('publicacao').insert(req.body)
    .returning('idPublicacao').then(async function (idPublicacao){

      for (const img of req.files) {

        if (img.location == undefined){
          var file_url = `${process.env.APP_URL}/files/${img.filename}`;
        } else {
          var file_url = img.location;
        }

        await knex('imagem')
        .insert({ nomeImagem: img.key, url: file_url , idPublicacao: idPublicacao[0]});
      }
    });

    return res.send({ res: 'publicação criada' });
  }

  async list(req, res){
    
    const { idUsuario } = req.params;

    const user_publications = await knex.select('*')
    .from('publicacao')
    .join('imagem', 'publicacao.idPublicacao', 'imagem.idPublicacao')
    .where({ idUsuario: idUsuario });

    return res.json(user_publications);
  }

  async delete(req, res, next){
    
    const { idUsuario, idPublicacao} = req.params;

    if(idUsuario != req.body.idUsuario) return res.status(400).send({error: "Você nao pode apagar publicações que não são suas"});

    const photos = await knex.select('imagem.nomeImagem', 'imagem.url')
    .from('publicacao')
    .join('imagem', 'publicacao.idPublicacao', 'imagem.idPublicacao')
    .where({ idUsuario: idUsuario });

    for (const photo of photos) {
      if (process.env.MULTER_CONFIG == 'local'){
        await unlinkAsync(path.resolve(__dirname, '..', '..', 'static', 'uploads', photo.nomeImagem));
      }
      else {
        s3.deleteObject({
          Bucket: 'obracertaupload',
          Key: photo.nomeImagem
        }).promise()
      }
      
    }

    await knex('publicacao').where({ 
      idUsuario: idUsuario, 
      idPublicacao: idPublicacao
    }).del();

    return res.send({message:'Publicacao deletada !'})
  }

}


module.exports = new publicationController();
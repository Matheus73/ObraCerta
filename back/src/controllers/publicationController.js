const fs = require('fs');
const {promisify} = require('util');

const authServices = require('../services/authServices');

const yup = require('yup');
const { where } = require('../database/index.js');
const knex = require('../database/index.js');
const auth = require('../services/authServices');

const unlinkAsync = promisify(fs.unlink);

class publicationController {
  async store(req, res){

    const userData =  await authServices.decodeToken(req.headers.authorization);
    req.body['idUsuario'] = userData.data.idUsuario;

    // se nenhum arquivo for enviado retorna um erro
    if (req.files.length == 0) return res.status(400).send({ error: "Nenhuma foto foi enviada" }) 

    // se alguma das imagens possuir mais de 5mb ele retorna um erro
    for (const img of req.files) {
      if(img.size >= 5000000){ 
        await unlinkAsync(img.path);
        return res.status(400).send({ error: "a imagem deve possuir menos de 5Mb" });
      }
    }

    await knex('publicacao').insert(req.body)
    .returning('idPublicacao').then(async function (idPublicacao){

      for (const img of req.files) {
        const file_path = img.path;
        await knex('imagem')
        .insert({ nomeImagem: file_path, idPublicacao: idPublicacao[0]});
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

    const photos = await knex.select('imagem.nomeImagem')
    .from('publicacao')
    .join('imagem', 'publicacao.idPublicacao', 'imagem.idPublicacao')
    .where({ idUsuario: idUsuario });

    for (const photo of photos) await unlinkAsync(photo.nomeImagem);

    await knex('publicacao').where({ 
      idUsuario: idUsuario, 
      idPublicacao: idPublicacao
    }).del();

    return res.send({message:'Publicacao deletada !'})
  }

}


module.exports = new publicationController();
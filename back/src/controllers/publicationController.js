const yup = require('yup');
const { where } = require('../database/index.js');
const knex = require('../database/index.js');
const auth = require('../services/authServices');

class publicationController {
  async store(req, res){

    // necessita de confirmar se o usuário está autenticado

<<<<<<< HEAD
    const dados = auth.decodeToken(req.headers.authorization);
    
    await knex('publicacao').insert(req.body);
=======
      for (const img of req.files) {
        const file_path = img.path;
        await knex('imagem')
        .insert({ nomeImagem: file_path, idPublicacao: idPublicacao[0]});
      }
    });
>>>>>>> back

    return res.send({ res: 'publicação criada' });
  }

  async list(req, res){
    
    const { idUsuario } = req.params;

    const user_publications = await knex.select('*')
    .from('publicacao')
<<<<<<< HEAD
    .where({ idUsuario: req.body.idUsuario });
=======
    .join('imagem', 'publicacao.idPublicacao', 'imagem.idPublicacao')
    .where({ idUsuario: idUsuario });
>>>>>>> back

    return res.json(user_publications);
  }

<<<<<<< HEAD
=======
  async delete(req, res, next){
    
    const { idUsuario, idPublicacao} = req.params;

    if(idUsuario != req.body.idUsuario) return res.status(400).send({error: "Você nao pode apagar publicações que não são suas"});

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

>>>>>>> back
}


module.exports = new publicationController();
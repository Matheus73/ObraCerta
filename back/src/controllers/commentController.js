const e = require('cors');
const knex = require('../database/index.js');

// Usar o yup para validar a entrada de dados. olhar a documentação do modulo para saber como utiliza-lo
class commentController {

  async create(req, res) {
    const {conteudo, idDono, idUsuario} = req.body;
    let commentlist = []
    let result;
    try {
      result = await knex('comentario').update({conteudo}).where({ idDono, idUsuario });
    } catch (error) {
      console.log(error)
    }
    if(result == 0){
      await knex('comentario').insert({idDono, idUsuario, conteudo});
      console.log('Novo comentário criado')
    }else{
      console.log('Comentário editado !')
    }
    return res.json({conteudo, idDono, idUsuario})
  }
  async list(req, res) {
    const {idUsuario} = req.params;
    let commentlist;
    try {
     commentlist =  await knex('comentario')
      .select('conteudo', 'idDono', 'comentarioCriadoEm')
      .where({idUsuario:idUsuario});
      console.log(commentlist)
    } catch (error) {
      console.log(error)
    }
    for (let x = 0; x < commentlist.length; x++){
      commentlist[x].comentarioCriadoEm = JSON.stringify(commentlist[x].comentarioCriadoEm).substring(1,11)
    }
    return res.json(commentlist)
  }
}

module.exports = new commentController();
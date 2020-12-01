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


}

module.exports = new commentController();
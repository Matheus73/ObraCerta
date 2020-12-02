const e = require('cors');
const knex = require('../database/index.js');
const authServices = require('../services/authServices')

// Usar o yup para validar a entrada de dados. olhar a documentação do modulo para saber como utiliza-lo
class commentController {

  async create(req, res) {
    const { conteudo } = req.body;
    const idUsuario = req.params.idUsuario;

    const loggedUserData = await authServices.decodeToken(req.headers.authorization);
    const idDono = loggedUserData.data.idUsuario


    let result;
    try {
      result = await knex('comentario').update({conteudo}).where({ idDono, idUsuario });
    } catch (error) {
      result = 0
    }

    if(result == 0) await knex('comentario').insert({idDono, idUsuario, conteudo});
    return res.json({conteudo, idDono, idUsuario})
  }
  async list(req, res) {
    const {idUsuario} = req.params;
    let commentlist;
    commentlist =  await knex('comentario')
      .select('conteudo', 'idDono', 'comentarioCriadoEm')
      .where({idUsuario:idUsuario});

    return res.json(commentlist)
  }
}

module.exports = new commentController();
const yup = require('yup');
const { where } = require('../database/index.js');
const knex = require('../database/index.js');
const auth = require('../services/authServices');

class publicationController {
  async store(req, res){

    // necessita de confirmar se o usuário está autenticado

    const dados = auth.decodeToken(req.headers.authorization);
    
    await knex('publicacao').insert(req.body);

    return res.send({ res: 'publicação criada' });
  }

  async list(req, res){
    
    const user_publications = await knex.select('*')
    .from('publicacao')
    .where({ idUsuario: req.body.idUsuario });

    return res.json(user_publications);
  }

}


module.exports = new publicationController();
const { number } = require('yup');
const knex = require('../database/index.js');
const auth = require('../services/authServices');

class rateController {
  async store(req, res) {
    const idAvaliado = req.params.idUsuario;
    const idAvaliador = req.body.idUsuario;

    const avaliacao = await knex.from('avaliacao')
    .where({ idAvaliado: idAvaliado, idAvaliador: idAvaliador })
    .first();

    if (avaliacao) return res.status(400).json( { message: 'ja foi criada uma avaliação' })

    const payload = {
      nota: req.body.nota,
      idAvaliador: idAvaliador,
      idAvaliado: idAvaliado
    }

    await knex('avaliacao').insert(payload);

    return res.json({ message: 'avaliação adicionada' });
  }
}

module.exports = new rateController();
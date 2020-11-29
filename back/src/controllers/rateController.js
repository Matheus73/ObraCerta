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

    if (avaliacao) return res.status(400).json({ message: 'ja foi criada uma avaliação' })

    const payload = {
      nota: req.body.nota,
      idAvaliador: idAvaliador,
      idAvaliado: idAvaliado
    }

    await knex('avaliacao').insert(payload);

    return res.json({ message: 'avaliação adicionada' });
  }

  async update(req, res) {
    let {idAvaliador, nota } = req.body;
    let idAvaliado = req.params.idUsuario;

    if (!await knex.update({ nota: nota })
      .from('avaliacao')
      .where({
        idAvaliado: idAvaliado,
        idAvaliador: idAvaliador
      }))
      return res.status(400).json({ message: "Avaliação não encontrada" });
    else
      return res.json({ message: "Nota Atualizada" });
  }

  async list(req, res) {
    let idAvaliado = req.params.idUsuario;

    let avaliacao = await knex.select('nota')
      .from('avaliacao')
      .where({ idAvaliado: idAvaliado });

    if (avaliacao.length === 0)
      return res.json('0');

    let notas = avaliacao.map(avaliacao => avaliacao.nota);
    let notasInt = notas.map(function (x) {
      return parseInt(x, 10);
    });

    let media = notasInt.reduce((t, n) => n + t, 0) / notasInt.length;

    return res.json({ media });
  }
}

module.exports = new rateController();
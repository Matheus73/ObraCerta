const yup = require('yup');
const bcrypt = require('bcryptjs');
const knex = require('../database/index.js');


// Usar o yup para validar a entrada de dados. olhar a documentação do modulo para saber como utiliza-lo
class UserController {


  async store (req, res) {
    // Responsável por cadastrar um usuário

    const schema = yup.object().shape({
      email: yup.string()
      .email()
      .max(50)
      .required(),
      nomeCompleto: yup.string()
      .max(100)
      .required(),
      senha: yup.string()
      .required(),
      criadoEm: yup.date()
      .default( ()=> { return new Date(); }),
      telefone: yup.string()
      .required(),
    })
    if (! (await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Erro de validação'});
    }

    const userExists = await knex.from('usuario').where({'email': req.body.email}).first();

    if (userExists) return res.status(400).json({ error: 'usuário já existe' });

    var newUser = req.body;

    newUser['hashSenha'] = await bcrypt.hash(req.body['senha'], 8);
    delete newUser.senha;
    //Criar um usuário
    await knex('usuario').insert(newUser);

    delete newUser.hashSenha;

    return res.json(newUser);

  }

  async list(req, res) {

    const userList = await knex.select('*').from('usuario');

    return res.json({ userList });

  }
}

module.exports = new UserController();
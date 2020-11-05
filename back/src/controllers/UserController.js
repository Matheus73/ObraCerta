import  * as yup from 'yup';

import User from '../models/User';


// Usar o yup para validar a entrada de dados. olhar a documentação do modulo para saber como utiliza-lo
class UserController {


  async store (req, res) {
    // Responsável por cadastrar um usuário

    const schema = yup.object.shape({
      email: yup.string()
      .email()
      .max(50)
      .required(),
      nomeCompleto: yup.string()
      .max(100)
      .required(),
      hashSenha: yup.string()
      .required(),
      criadoEm: yup.date()
      .default( ()=> { return new Date(); }),
    })

    if (! (await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Erro de validação'})
    }
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) return res.status(400).json({ error: 'usuário já existe' });

    const {idUsuaio, email, nomeCompleto} = await User.create(req.body);

    return res.json(
      {idUsuaio,
      nomeCompleto,
      email,
    });
  }

  async list(req, res) {

    userList = await User.findAll()

    return res.json({ userList });

  }
}

export default new UserController()
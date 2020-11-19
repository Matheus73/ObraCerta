const yup = require('yup');
const bcrypt = require('bcryptjs');
const knex = require('../database/index.js');


// Usar o yup para validar a entrada de dados. olhar a documentação do modulo para saber como utiliza-lo
class UserController {


  async store(req, res) {
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
      // criadoEm: yup.date()
      //   .default(() => { return new Date(); }),
      telefone: yup.string()
        .required(),
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const userExists = await knex.from('usuario').where({ 'email': req.body.email }).first();

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

  async delete(req, res, next) {

    try {

      const { senha } = req.body;
      const { idUsuario } = req.params;

      const hash = await knex.select('hashSenha')
        .from('usuario')
        .where({ idUsuario: idUsuario })
        .first();

      if (!await bcrypt.compare(senha, hash.hashSenha)){
        return res.status(400).send({ error : 'Senha inválida' });
      }

      await knex('usuario').where({ idUsuario: idUsuario }).del();

      return res.send({message:'Usuario Deletado Com Sucesso'});

    } catch (error) {

      next(error);

    }

  }

  async update(req, res, next) {

    try {
      const {idUsuario} = req.params;
      const senha = req.body.senha;

      const hash = await knex.select('hashSenha')
        .from('usuario')
        .where({ idUsuario: idUsuario })
        .first();
      
      if (!await bcrypt.compareSync(senha, hash.hashSenha)){
        return res.status(400).send({ error : 'Senha inválida' });
      }

      const newUserInfo = {
        nomeCompleto : req.body.novoNomeCompleto, 
        email : req.body.novoEmail, 
        telefone : req.body.novoTelefone, 
        descricao : req.body.novaDescricao, 
        categoria : req.body.novaCategoria
      }
      //retirando informações que não serão atualizadas
      let info;
      for (info in newUserInfo){
        if (newUserInfo[info] === ''){
          delete newUserInfo[info]
        }
      }

     await knex('usuario').update(newUserInfo).where({idUsuario});
      
      return res.send(newUserInfo)

      
    } catch (error) {

      next(error);

    }

  }

}

module.exports = new UserController();
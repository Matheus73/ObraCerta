const yup = require('yup');
const bcrypt = require('bcryptjs');
const knex = require('../database/index.js');
const authServices = require('../services/authServices');
const aws = require('aws-sdk');
const { json } = require('express');

const s3 = new aws.S3();


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

    const dados = await knex.select('*')
      .from('usuario')
      .where({ email: newUser.email })
      .first();

    delete dados.hashSenha;

    const token = await authServices.generateToken(dados);

    return res.json({ dados, token });

  }

  async list(req, res) {

    let userList = [];
    console.log(req.query)
    if (req.query.searchBar != '') {
      let searchStr = req.query.searchBar;
      let locality = req.query.locality != '' ? { localidade: req.query.locality } : {};

      try {
        userList = await knex.select('idUsuario', 'nomeCompleto', 'email', 'categoria', 'descricao', 'imagemPerfil', 'localidade', knex.raw('ARRAY_AGG(nota) as notas'))
          .from('usuario').where(locality)
          .leftJoin('avaliacao', 'usuario.idUsuario', '=', 'avaliacao.idAvaliado')
          .groupBy('idUsuario');

      } catch (error) {
        return res.json({ message: "Algo deu errado na busca com a searchBar :( ." + error }).status(400);
      }
      for (let i = userList.length - 1; i >= 0; --i) {
        if (userList[i].descricao.toLowerCase().indexOf(searchStr.toLowerCase()) == -1) { //se a str pesquisada existir em alguma descrição skipa esse if
          userList.splice(i, 1)
        }
      }

    } else {

      const filters = {
        categoria: req.query.categoryFilter,
        localidade: req.query.locality
      }
      //retirando filtros vazios 
      for (const filter in filters) {
        if (filters[filter] == '') {
          delete filters[filter];
        }
      }
      //pegando usuarios de acordo com filtros existentes
      // let userList = []
      try {
        userList = await knex
          .select('idUsuario', 'nomeCompleto', 'email', 'categoria', 'imagemPerfil', 'localidade', 'descricao', knex.raw('ARRAY_AGG(nota) as notas'))
          .from('usuario')
          .leftJoin('avaliacao', 'usuario.idUsuario', '=', 'avaliacao.idAvaliado')
          .where(filters).groupBy('idUsuario');

      } catch (error) {
        return res.json({ message: "Algo deu errado na busca com filtros :( ." + error }).status(400);
      }
    }
    let noAvalUsers = []
    for (let i = userList.length - 1; i >= 0; --i) {
      if (userList[i].notas[0] === null) {
        delete userList[i].notas
        userList[i].numeroDeAvaliacoes = 0
        userList[i].notaMedia = 'Sem Avaliações'
        noAvalUsers.push(userList.splice(i, 1)[0])
      }
    }

    let media = 0
    for (const user in userList) {
      media = userList[user].notas.reduce((soma, n) => parseInt(n) + soma, 0) / userList[user].notas.length;
      userList[user].numeroDeAvaliacoes = userList[user].notas.length;// salvando n de avals
      userList[user].notaMedia = media.toFixed(2); //arredondando
      delete userList[user].notas;

      userList = userList.sort((a, b) => {
        return a.notaMedia < b.notaMedia ? 1 : a.notaMedia > b.notaMedia ? -1 : 0;
      })//ordenando do mais bem avaliado do pior avaliado
    }

    return res.json(userList.concat(noAvalUsers));

  }

  async one(req, res) {
    const { idUsuario } = req.params;

    //  const user = await knex.select('idUsuario', 'nomeCompleto', 'categoria', 'imagemPerfil', 'localidade', 'descricao')
    //    .from('usuario').where({ idUsuario: idUsuario }).first()
    let user;
    try{
      user = await knex('usuario')
      .select(
        'idUsuario',
        'nomeCompleto',
        'email',
        'categoria',
        'imagemPerfil',
        'localidade',
        'descricao',
        'telefone')
      .where({ idUsuario });
      user[0].comments = await knex('comentario')
      .select('conteudo', 'idDono', 'comentarioCriadoEm')
      .where({idUsuario:idUsuario});
    }catch (err){
      console.log('erro no metodo one' + err)
      return res.status(500);
    }

      for (let x = 0; x < user[0].comments.length; x++){
        user[0].comments[x].comentarioCriadoEm = JSON.stringify(user[0].comments[x].comentarioCriadoEm).substring(1,11)
      }
    

    if (!user) return res.status(404).json({ error: 'usuário não existe' });

    return res.json(user);
  }

  async delete(req, res, next) {

    try {

      const { senha } = req.body;
      const { idUsuario } = req.params;

      const hash = await knex.select('hashSenha')
        .from('usuario')
        .where({ idUsuario: idUsuario })
        .first();

      if (!await bcrypt.compare(senha, hash.hashSenha)) {
        return res.status(400).send({ error: 'Senha inválida' });
      }

      await knex('usuario').where({ idUsuario: idUsuario }).del();

      return res.send({ message: 'Usuario Deletado Com Sucesso' });

    } catch (error) {

      next(error);

    }

  }

  async update(req, res, next) {

    try {
      const loggedUserData = await authServices.decodeToken(req.headers.authorization);
      const idUsuario = loggedUserData.data.idUsuario
      if (idUsuario != Number(req.params.idUsuario)) return res.status(400).json({ error: "o usuário não pode editar as informações de outro usuário" });

      var file_url = ''
      if (req.files.length != 0){
        if (process.env.MULTER_CONFIG == 'local') {
          file_url = `${process.env.APP_URL}/files/${req.files[0].filename}`;
        } else {
          const url = await knex.select('imagemPerfil').from('usuario').where({ idUsuario }).first();
          if (url.imagemPerfil) {
            const pathSplit = url.imagemPerfil.split('/');
            const name = pathSplit.slice(-1);
            s3.deleteObject({
              Bucket: 'obracertaupload',
              Key: name[0]
            }).promise();
          }
          file_url = req.files[0].location;
        }
      }

      const newUserInfo = {
        nomeCompleto: req.body.nomeCompleto,
        email: req.body.email,
        telefone: req.body.telefone,
        descricao: req.body.descricao,
        localidade: req.body.localidade,
        categoria: req.body.categoria,
        imagemPerfil: file_url
      }

      //retirando informações que não serão atualizadas
      let info;
      for (info in newUserInfo) {
        if (newUserInfo[info] == '' || newUserInfo[info] == undefined) {
          delete newUserInfo[info]
        }
      }

      if (Object.keys(newUserInfo).length === 0) return res.status(200).send({message: 'Nada foi editado'});

      await knex('usuario').update(newUserInfo).where({ idUsuario });
      return res.send(newUserInfo)
    } catch (error) {
      next(error);
    }
  }

  async updatePassword(request, response) {
    const { id, senha, novaSenha } = request.body;

    const hash = await knex.select('hashSenha')
      .from('usuario')
      .where({ idUsuario: id })
      .first();

    if (!await bcrypt.compare(senha, hash.hashSenha))
      return response.status(401).send({ error: 'Senha inválida' });

    if (await bcrypt.compare(novaSenha, hash.hashSenha))
      return response.json({ message: 'Nova Senha não pode ser igual a anterior' });

    await knex.update({ hashSenha: await bcrypt.hash(novaSenha, 8) })
      .from('usuario')
      .where({ idUsuario: id });

    return response.json({ message: 'Senha Alterada' });
  }

}

module.exports = new UserController();
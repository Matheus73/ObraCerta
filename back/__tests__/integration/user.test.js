const request = require('supertest');
const knex = require('../../src/database/index.js');
const app = require('../../src/app.js')


describe("Usuario", () =>{
  
  it('Deve criar um usuário', done => {
    const user = {
      "email": "samuelteste2@dsad.com",
      "nomeCompleto": "Samuel nogueira",
      "senha": "112332",
      "telefone": "619999990"
    }

    request(app)
      .post('/registrar')
      .send({
        email: user.email,
        nomeCompleto: user.nomeCompleto,
        senha: user.senha,
        telefone: user.telefone
      }).then(res => {
        expect(res.status).toBe(200);
        done();
      })
  });

  it('Deve criar um segundo usuário ', done => {
    const user = {
      "email": "samuelteste3@dsad.com",
      "nomeCompleto": "Samuel nogueira",
      "senha": "112333",
      "telefone": "619999991"
    }

    request(app)
      .post('/registrar')
      .send({
        email: user.email,
        nomeCompleto: user.nomeCompleto,
        senha: user.senha,
        telefone: user.telefone
      }).then(res => {
        expect(res.status).toBe(200);
        done();
      })
  });

  it('Deve logar um usuário', done => {

    const user = {
      "email": "samuelteste2@dsad.com",
      "senha": "112332"
    }

    request(app)
    .post('/login').
    send({
      email: user.email,
      senha: user.senha
    }).then(res => {
      expect(res.body).toHaveProperty("token");
      done();
    })

  });

});
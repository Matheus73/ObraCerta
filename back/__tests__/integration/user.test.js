const request = require('supertest');
const knex = require('../../src/database/index.js');
const app = require('../../src/app.js')


describe("Usuario", () =>{
  
  it('ID - CTB01_US01\nDeveria validar e criar um usuário', done => {
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

  it('ID - CTB01_US01\nDeveria criar um segundo usuário ', done => {
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

  it('ID - CTB02_US01\nDeveria logar um usuário', done => {

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

  it('ID - CTB03_US01\nDeveria retornar os dados de um usuário com um status 200', done => {
    request(app)
    .get('/perfil/1')
    .then( res => {
      expect(res.status).toBe(200);
      done()
    });
  });

  it('ID - CTB04_US01\nDeveria retornar um status 404 ao solicitar os dados de um usuário', done =>{ 
    request(app)
    .get('/perfil/4')
    .then( res => {
      expect(res.status).toBe(404);
      done()
    });
  });
});
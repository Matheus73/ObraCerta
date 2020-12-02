const app = require('../../src/app');
const request = require('supertest');
const knex = require('../../src/database/index.js');
const auth = require('../../src/services/authServices');


describe('Avaliação', () => {
  var token = '';

  beforeEach(async () => {
    const email = "samuelteste2@dsad.com";
    
    const dados = await knex.select('*')
            .from('usuario')
            .where({ email: email })
            .first();

  token = await auth.generateToken(dados);
  });

  it('CTB01_US04\nDeveria criar uma avaliação', async done =>{

    var cont = 0;
    while (cont < 16) {
      request(app)
      .post('/2/avaliar')
      .set('Authorization', `Bearer ${token}`)
      .send({ nota: Math.floor(Math.random() *6 ) })
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });

      cont++;
    }

  });

  it('CTB02_US04\nDeveria ser incapaz de criar uma avaliação no mesmo usuário', async done => {

    request(app)
      .post('/2/avaliar')
      .set('Authorization', `Bearer ${token}`)
      .send({ nota: 4 })
      .then( res => {
        expect(res.status).toBe(400);
        done();
      });

  });

  it('CTB03_US04\nDeveria retornar a média das avaliações', async done => {

    request(app)
    .get('/2/avaliar/list')
    .set('Authorization', `Bearer ${token}`)
    .then( res => {
      expect(res.status).toBe(200);
      done();
    });
  });

});
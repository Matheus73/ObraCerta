const app = require('../../src/app');
const request = require('supertest');
const knex = require('../../src/database/index.js');
const auth = require('../../src/services/authServices');


describe('Avaliação', () => {

  it('Deve criar uma avaliação', async done =>{

    const email =  "samuelteste2@dsad.com";
    
    const dados = await knex.select('*')
            .from('usuario')
            .where({ email: email })
            .first();

    const token = await auth.generateToken(dados);


    request(app)
      .post('/2/avaliar')
      .set('Authorization', `Bearer ${token}`)
      .send({ nota: 5 })
      .then( res => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('Deve ser incapaz de criar uma avaliação no mesmo usuário', async done => {

    const email = "samuelteste2@dsad.com";
    
    const dados = await knex.select('*')
            .from('usuario')
            .where({ email: email })
            .first();

    const token = await auth.generateToken(dados);

    request(app)
      .post('/2/avaliar')
      .set('Authorization', `Bearer ${token}`)
      .send({ nota: 4 })
      .then( res => {
        expect(res.status).toBe(400);
        done();
      });
  });

});
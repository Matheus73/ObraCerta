const request = require('supertest');
const knex = require('knex');

describe('Avaliação', () => {

  it('Deve criar uma avaliação', done =>{
    request('2/avaliar').send({ nota: 5 }).then( res => {
      expect(res.status).toBe(200);
      done();
    });
  });

  it('Deve ser incapaz de criar uma avaliação no mesmo usuário', done => {
    request('2/avaliar').send({ nota: 3}).then( res =>{
      expect(res.status).toBe(400);
      done();
    });
  });

});
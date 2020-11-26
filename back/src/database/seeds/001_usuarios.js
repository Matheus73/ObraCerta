const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries    

      const users = []
      const categorias = ['Serralheiro', 'Pintor', 'Eletricista', 'Marceneiro', 'Encanador', 'Pedreiro', null];
      const resps = ['Bolacha', 'Biscoito', null];
      let user ;

      for (let index = 1; index < 500; index++) {
        user = {
          email:'user' + index + '@mail.com',
          nomeCompleto:'Test User',
          hashSenha: bcrypt.hashSync('123456', 8),
          telefone:'9999999999',
          categoria: categorias[Math.floor(Math.random()*categorias.length)],
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca: resps[Math.floor(Math.random()*resps.length)]
        }
        
      }
      console.log(users)
      return knex('usuario').insert(users);
    });
};

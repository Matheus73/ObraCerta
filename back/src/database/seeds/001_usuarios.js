const bcrypt = require('bcryptjs');
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries    
      const users = []
      const categorias = ['Serralheiro', 'Pintor', 'Eletricista', 'Marceneiro', 'Encanador', 'Pedreiro', null, null];
      const resps = ['Bolacha', 'Biscoito', null];

      for (let index = 1; index <= 500; index++) {
        users.push({
          email: 'user' + index + '@mail.com',
          nomeCompleto: 'Test User',
          hashSenha: bcrypt.hashSync('123456', 8),
          telefone: '9999999999',
          categoria: categorias[Math.floor(Math.random() * categorias.length)],
          imagemPerfil: 'fakePerfilImage.jpg',
          descricao: 'trabalho desde 17 anos na area',
          respDeSeguranca: resps[Math.floor(Math.random() * resps.length)]
        });

      }
      return knex('usuario').insert(users);
    });
};

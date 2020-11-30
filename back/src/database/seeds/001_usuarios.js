const bcrypt = require('bcryptjs');
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries    
      const users = []
      const categorias = ['Serralheiro', 'Pintor', 'Eletricista', 'Marceneiro', 'Encanador', 'Pedreiro', 'Não Definida', 'Não Definida'];
      const localidades = ['AC', 'AL', 'AP', 'AM' ,'BA', 'CE' ,'ES' ,'GO' ,'MA', 'MT' ,'MS', 'MG' ,'PA' ,'PB', 'PR', 'PE', 'PI' ,'RJ', 'RN', 'RS' ,'RO' ,'RR', 'SC','SP','SE','TO','DF', 'Não Definida', 'Não Definida', 'Não Definida']
      const resps = ['Bolacha', 'Biscoito', 'Não Definida'];

      for (let index = 1; index <= 500; index++) {
        users.push({
          email: 'user' + index + '@mail.com',
          nomeCompleto: 'Test User',
          hashSenha: bcrypt.hashSync('123456', 8),
          telefone: '9999999999',
          categoria: categorias[Math.floor(Math.random() * categorias.length)],
          imagemPerfil: 'https://obracertaupload.s3.amazonaws.com/f9f02e7a-142f-4223-ac63-3987dd1c16db-photo perfil.jpg',
          descricao: 'trabalho desde 17 anos na area',
          localidade: localidades[Math.floor(Math.random() * localidades.length)],
          respDeSeguranca: resps[Math.floor(Math.random() * resps.length)]
        });

      }
      return knex('usuario').insert(users);
    });
};

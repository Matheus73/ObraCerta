
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comentario').del()
    .then(function () {
      // Inserts seed entries
      return knex('comentario').insert([
        {
          conteudo: 'conteudo do comentario...',
          idPublicacao: '1',
          idUsuario: '3'
        },
        {
          conteudo: 'conteudo do comentario...',
          idPublicacao: '1',
          idUsuario: '2'
        },
      ]);
    });
};

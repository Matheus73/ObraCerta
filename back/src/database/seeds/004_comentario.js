
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comentario').del()
    .then(function () {
      // Inserts seed entries
      const numberOfComments = 400
      const comments = []
      for (let index = 1; index <= numberOfComments; index++) {
        comments.push({
          conteudo: 'Conteudo do comentario...',
          idPublicacao: (Math.floor(Math.random() * 300) + 1),
          idUsuario: (Math.floor(Math.random() * 500) + 1)
        });
      }
      return knex('comentario').insert(comments);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comentario').del()
    .then(function () {
      // Inserts seed entries
      const numberOfComments = 400
      const comments = []
      const comentarios = ["Muito bom, recomendo.", "Trabalha muito bem.", "Não gostei muito do trabalho que ele prestou pra mim.", "Super pontual e organizado."]
      for (let index = 1; index <= numberOfComments; index++) {
        comments.push({
          conteudo: comentarios[Math.floor(Math.random() * comentarios.length)],
          idDono: (Math.floor(Math.random() * 300) + 1),
          idUsuario: (Math.floor(Math.random() * 500) + 1)
        });
      }
      return knex('comentario').insert(comments);
    });
};

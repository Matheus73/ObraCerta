
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('publicacao').del()
    .then(function () {
      // Inserts seed entries
      const numberOfPubs = 300
      const pubs = []
      for (let index = 0; index < numberOfPubs; index++) {
        pubs.push({
          idUsuario: (Math.floor(Math.random() * 500) + 1),
          descricao:'Fiz isso, isso e aquilo em 2 dias.'
        });

      }
      return knex('publicacao').insert(pubs);
    });
};

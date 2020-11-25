
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('publicacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('publicacao').insert([
        {
          idUsuario:'1',
          descricao:'fiz isso isso e aquilo.'
        },
        {
          idUsuario:'1',
          descricao:'fiz isso isso e aquilo.'
        },
        {
          idUsuario:'1',
          descricao:'fiz isso isso e aquilo.'
        },
        {
          idUsuario:'4',
          descricao:'fiz isso isso e aquilo.'
        },
        {
          idUsuario:'4',
          descricao:'fiz isso isso e aquilo.'
        },
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('publicacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('publicacao').insert([
        {
          idUsuario:'1'
        },
        {
          idUsuario:'1'
        },
        {
          idUsuario:'1'
        },
        {
          idUsuario:'4'
        },
        {
          idUsuario:'4'
        },
      ]);
    });
};

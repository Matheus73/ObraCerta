
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('candidata_se').del()
    .then(function () {
      // Inserts seed entries
      return knex('candidata_se').insert([
        {
          idProjeto: '1',
          idUsuario: '5'
        },
        {
          idProjeto: '2',
          idUsuario: '3'
        },
      ]);
    });
};

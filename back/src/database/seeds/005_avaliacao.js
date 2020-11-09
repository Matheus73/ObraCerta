
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avaliacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('avaliacao').insert([
        {
          nota: '4',
          idAvaliador: '1',
          idAvaliado:'4'
        },
        {
          nota: '5',
          idAvaliador: '2',
          idAvaliado:'1'
        },
        {
          nota: '0',
          idAvaliador: '6',
          idAvaliado:'2'
        },
       
      ]);
    });
};

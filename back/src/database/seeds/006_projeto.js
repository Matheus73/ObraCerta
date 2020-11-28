
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projeto').del()
    .then(function () {
      // Inserts seed entries
      const projects = []      
      for (let index = 0; index <= 50; index++) {
        projects.push({
          tituloProjeto: 'Reboco lá em casa',
          imagemProjeto: 'imagem_fake_reboco.jpg',
          descricaoProjeto: 'Rebocar as paredes lá de casa. Obs: pago bem.',
          localidadeProjeto: 'Rua xxx Casa xx taguatinga Df',
          idProprietario: (Math.floor(Math.random() * 500) + 1)
        })
        
      }
      return knex('projeto').insert(projects);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projeto').del()
    .then(function () {
      // Inserts seed entries
      return knex('projeto').insert([
        {
          tituloProjeto: 'Reboco lá em casa',
          imagemProjeto: 'imagem_fake_reboco.jpg',
          descricaoProjeto: 'Rebocar as paredes lá de casa. Obs: pago bem.',
          localidadeProjeto: 'Rua xxx Casa xx taguatinga Df',
          idProprietario: '2'
        },
        {
          tituloProjeto: 'Subir uma laje',
          imagemProjeto: 'imagem_fake_laje.jpg',
          descricaoProjeto: 'Me ajudar a subir uma laje.',
          localidadeProjeto: 'Rua xxx Casa xx samambaia Df',
          idProprietario: '4'
        },
        {
          tituloProjeto: 'Remover ceramica',
          imagemProjeto: 'imagem_fake_ceramica.jpg',
          descricaoProjeto: 'Tirar 2800 metros quadrados de ceramica',
          localidadeProjeto: 'Rua xxx Casa xx ParkShopping Df',
          idProprietario: '6'
        },
      ]);
    });
};

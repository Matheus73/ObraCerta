
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('imagem').del()
    .then(function () {
      // Inserts seed entries
      const numberOfPubs = 300
      const imgs = []
      for (let index = 1; index <= numberOfPubs; index++) {
        imgs.push({
          nomeImagem:'dd1c16db-photo%20perfil.jpg',
          url:'https://obracertaupload.s3.amazonaws.com/f9f02e7a-142f-4223-ac63-3987dd1c16db-photo perfil.jpg',
          idPublicacao : index
        });

      }
      return knex('imagem').insert(imgs);
    });
};

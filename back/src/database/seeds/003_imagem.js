
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('imagem').del()
    .then(function () {
      // Inserts seed entries
      const numberOfPubs = 300
      const imgs = []
      for (let index = 1; index <= numberOfPubs; index++) {
        imgs.push({
          nomeImagem:'fakePubImage'+index+'.jpg',
          idPublicacao : index
        });

      }
      return knex('imagem').insert(imgs);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('imagem').del()
    .then(function () {
      // Inserts seed entries
      return knex('imagem').insert([
        {
          nomeImagem:'image-fake.jpg',
          idPublicacao : '1'
        },
        {
          nomeImagem:'image-fake.jpg',
          idPublicacao : '1'
        },
        {
          nomeImagem:'image-fake.jpg',
          idPublicacao : '2'
        },
        {
          nomeImagem:'image-fake.jpg',
          idPublicacao : '3'
        },
       
      ]);
    });
};

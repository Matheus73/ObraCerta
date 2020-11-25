
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {
          email:'Pedroca@mail.com',
          nomeCompleto:'Pedro Henrique',
          hashSenha:'1a2b3c4d5e',
          telefone:'6199999999',
          categoria:'Marceneiro',
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca:'batata'
        },
        {
          email:'Bigode@mail.com',
          nomeCompleto:'Matheus Gabriel',
          hashSenha:'1a2b3c4d5e',
          telefone:'6199999998',
          categoria:'Marceneiro',
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca:'batata'
        },
        {
          email:'Samuca@mail.com',
          nomeCompleto:'Samuel Nogueira',
          hashSenha:'1a2b3c4d5e',
          telefone:'6199999997',
          categoria:'Marceneiro',
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca:'batata'
        },
        {
          email:'Sayuk@mail.com',
          nomeCompleto:'Rodolpho Reginaldo',
          hashSenha:'1a2b3c4d5e',
          telefone:'6199999996',
          categoria:'Marceneiro',
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca:'batata'
        },
        {
          email:'jhoneskess@mail.com',
          nomeCompleto:'Kess Jhones',
          hashSenha:'1a2b3c4d5e',
          telefone:'6199999995',
          categoria:'Marceneiro',
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca:'batata'
        },
        {
          email:'gorgor@mail.com',
          nomeCompleto:'Igor Queiroz',
          hashSenha:'1a2b3c4d5e',
          telefone:'6199999994',
          categoria:'Marceneiro',
          imagemPerfil:'fakeimage.jpg',
          descricao:'trabalho desde 17 anos na area',
          respDeSeguranca:'batata'
        },
      ]);
    });
};

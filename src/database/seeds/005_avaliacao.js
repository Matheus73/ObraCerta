
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avaliacao').del()
    .then(function () {
      // Inserts seed entries
      const numberOfeval = 100
      const evals = []
      const notas = [0, 1, 2, 3, 4, 5]
      const validpairs = []
      let pair = ''
      while(validpairs.length<100){
        pair = {
          nota: notas[Math.floor(Math.random() * notas.length)],
          idAvaliador: (Math.floor(Math.random() * 500) + 1),
          idAvaliado: (Math.floor(Math.random() * 500) + 1)
        }
        if(!validpairs.some(vp => vp.idAvaliador === pair.idAvaliador && vp.idAvaliado === pair.idAvaliado || pair.idAvaliado == pair.idAvaliador)){
          validpairs.push(pair)
        }
      }
      
      return knex('avaliacao').insert(validpairs);
    });
};

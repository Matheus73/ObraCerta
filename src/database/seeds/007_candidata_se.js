const { RuleTester } = require("eslint");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('candidata_se').del()
    .then(function () {
      // Inserts seed entries
      const validUsers = []
      const candidaturas = []
      while(validUsers.length < 100){
        let temp = (Math.floor(Math.random() * 500) + 1)
        if(validUsers.indexOf(temp) == -1){
          validUsers.push(temp)
        }
      }
      for (let index = 0; index < validUsers.length; index++) {
        candidaturas.push({
            idProjeto: (Math.floor(Math.random() * 50) + 1),
            idUsuario: validUsers[index]
          })
        
      }
      
      return knex('candidata_se').insert(candidaturas);
    });
};

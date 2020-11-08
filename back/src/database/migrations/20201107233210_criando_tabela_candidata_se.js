
exports.up = function(knex) {
  
  return knex.schema.createTable('candidata_se', function(table){
    table.integer('idProjeto');
    table.integer('idUsuario');
    table.foreign('idProjeto').references('idProjeto').inTable('projeto').
    onUpdate('CASCADE').onDelete('CASCADE');
    table.foreign('idUsuario').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE');
    
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('candidata_se');
};

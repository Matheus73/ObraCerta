
exports.up = function(knex) {
  
  return knex.schema.createTable('avaliacao', function(table){
    table.increments('idAvaliacao').primary();
    table.enu('nota', ['0', '1', '2', '3', '4', '5']).notNullable();
    table.integer('idAvaliador'); 
    table.integer('idAvaliado');
    table.foreign('idAvaliador').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE');
    table.foreign('idAvaliado').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE');
    
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('avaliacao');
};

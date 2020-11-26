
exports.up = function(knex) {
  
  return knex.schema.createTable('publicacao', function(table){
    table.increments('idPublicacao').primary();
    table.string('descricao');
    table.timestamp('pubCriadaEm').defaultTo(knex.fn.now());
    table.integer('idUsuario');
    table.foreign('idUsuario').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE');  
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('publicacao');
};

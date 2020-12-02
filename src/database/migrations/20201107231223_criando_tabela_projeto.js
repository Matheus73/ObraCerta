
exports.up = function(knex) {
  
  return knex.schema.createTable('projeto', function(table){
    table.increments('idProjeto').primary();
    table.string('tituloProjeto', 50).notNullable();
    table.string('imagemProjeto');
    table.string('descricaoProjeto', 300);
    table.string('localidadeProjeto', 100);
    table.integer('idProprietario').notNullable();
    table.foreign('idProprietario').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE');
    
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('projeto');
};

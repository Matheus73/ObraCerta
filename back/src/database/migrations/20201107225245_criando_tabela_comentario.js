
exports.up = function(knex) {
  
  return knex.schema.createTable('comentario', function(table){
    table.increments('idComentario').primary();
    table.string('conteudo', 300).notNullable();
    table.timestamp('comentarioCriadoEm').defaultTo(knex.fn.now());
    //table.integer('idPublicacao');
    table.integer('idDono');
    table.integer('idUsuario');  
    // table.foreign('idPublicacao').references('idPublicacao').inTable('publicacao').
    // onUpdate('CASCADE').onDelete('CASCADE');
    table.foreign('idUsuario').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE');
    table.foreign('idDono').references('idUsuario').inTable('usuario').
    onUpdate('CASCADE').onDelete('CASCADE'); 
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('comentario');
};

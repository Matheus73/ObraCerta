
exports.up = function(knex) {
  
  return knex.schema.createTable('usuario', function(table){
    table.increments('idUsuario').primary();
    table.string('email', 50).unique().notNullable();
    table.string('nomeCompleto', 100).notNullable();
    table.string('hashSenha').notNullable();
    table.string('telefone', 15);
    table.string('categoria', 30);
    table.string('imagemPerfil');
    table.string('descricao');
    table.string('respDeSeguranca'); 
    table.timestamp('criadoEm').defaultTo(knex.fn.now());  
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};

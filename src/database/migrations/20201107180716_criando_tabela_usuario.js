
exports.up = function(knex) {
  
  return knex.schema.createTable('usuario', function(table){
    table.increments('idUsuario').primary();
    table.string('email', 50).unique().notNullable();
    table.string('nomeCompleto', 100).notNullable();
    table.string('hashSenha').notNullable();
    table.string('telefone', 15);
    table.string('localidade', 20).defaultTo('Não Definida');
    table.string('categoria', 30).defaultTo('Não Definida');
    table.string('imagemPerfil').defaultTo('https://obracertaupload.s3.amazonaws.com/f9f02e7a-142f-4223-ac63-3987dd1c16db-photo%20perfil.jpg');
    table.string('descricao').defaultTo('Sem descrição...');
    table.string('respDeSeguranca').defaultTo('Não Definida'); 
    table.timestamp('criadoEm').defaultTo(knex.fn.now());  
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};

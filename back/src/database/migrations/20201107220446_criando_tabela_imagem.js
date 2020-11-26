
exports.up = function(knex) {
  
  return knex.schema.createTable('imagem', function(table){
    table.increments('idImagem').primary();
    table.string('nomeImagem')
    table.integer('idPublicacao')
    table.foreign('idPublicacao').references('idPublicacao').inTable('publicacao').
    onUpdate('CASCADE').onDelete('CASCADE');  
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('imagem');
};

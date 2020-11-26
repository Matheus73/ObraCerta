const process = require('process');
const knexfile = require('../../knexfile');
const knex = require('knex')

let database = null;
if (process.env.NODE_ENV == 'test' || 'test ') {
  database = knex(knexfile.test);
} else {
  database = knex(knexfile.development);
}

module.exports = database;
// Update with your config settings.
const process = require('process');

require('dotenv').config({
  path: process.env.NODE_ENV ==  'test' || process.env.NODE_ENV == 'test ' ? '.env.test' : '.env'
}); //comentar se não tiver utilizando dotenv e alterar dados abaixo

module.exports = {

  test: {
    client: process.env.DB_CLIENT,
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    }, 
    migrations : {
      tableName :'knex_migrations',
      directory : `${__dirname}/src/database/migrations`
    },
    seeds : {
      directory : `${__dirname}/src/database/seeds` 
    }
  },

  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    }, 
    migrations : {
      tableName :'knex_migrations',
      directory : `${__dirname}/src/database/migrations`
    },
    seeds : {
      directory : `${__dirname}/src/database/seeds` 
    }
  }
  
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};


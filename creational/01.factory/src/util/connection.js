const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'your_database_password',
      database : 'myapp_test'
    }
  });

  module.exports = knex
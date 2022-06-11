module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      port: '5432',
      user: 'postgres_user',
      password: 'postgres_pass',
      database: 'postgres_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
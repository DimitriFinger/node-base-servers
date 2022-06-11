import knex from 'knex';
import * as knexfile from './knexfile';

const db = knex(knexfile.development);

module.exports = db;
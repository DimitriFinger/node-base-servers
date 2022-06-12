import knex from 'knex';
import * as knexfile from './knexfile';

export const db = knex(knexfile.development);
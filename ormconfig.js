require('dotenv').config({ path: './.env' });
// const SnakeNamingStrategy =
//   require('typeorm-naming-strategies').SnakeNamingStrategy;
const { DataSource } = require('typeorm');
const { DB_URI, NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';
const migrationDirCLI = isProd ? 'dist/migration' : 'src/migration';

module.exports = {
  url: DB_URI,
  type: 'postgres',
  port: '5432',
  synchronize: false,
  logging: false,
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
};

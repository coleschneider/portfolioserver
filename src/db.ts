import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { DataSource } from 'typeorm';

const { DB_URI } = process.env;

const db = new DataSource({
  url: DB_URI,
  type: 'postgres',
  port: 5432,
  synchronize: false,
  logging: false,
  migrations: ['dist/**/migrations/*.js'],
  entities: ['dist/**/entity/*.js'],
});

export default db;

//config.db.js
import pg from 'pg'

export const dbConecction = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'nodepg',
    port: "5432"
  }); 
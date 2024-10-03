import pg from 'pg'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../const.js';

export const dbConecction = new pg.Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
  }); 
dbConecction.query('SELECT NOW()').then(result=>{
    console.log('Database connected', result.rows[0].now)
})
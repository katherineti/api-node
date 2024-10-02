//config.db.js
import pg from 'pg'

export const dbConecction = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "katherine",
    port: "5432"
  }); 
dbConecction.query('SELECT NOW()').then(result=>{
    console.log('Database connected', result.rows[0].now)
})
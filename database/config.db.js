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

// crearTabla();

// async function crearTabla(dbConecction) {
  // const client = await pool.connect();
  try {
    const query = `
     CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(40),
    lastname VARCHAR(40),
    gender VARCHAR(10) CHECK (gender IN ('male', 'female')),
    phone VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(255),
    zip_code VARCHAR(255),
    birthdate VARCHAR(40),
    url_image VARCHAR(200),
    id_departamento INT,
    id_puesto INT,
    status INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
    `;
    // await client.query(query);
    // console.log('Tabla "users" creada o ya existente.');
    dbConecction.query(query).then(result=>{
      console.log('Tabla "users" creada o ya existente.', result)
    })
  } catch (error) {
    console.error('Error al crear la tabla:', error);
  } finally {
    // client.release();
  }
// }
import 'dotenv/config'
import pg from 'pg'

const { Client } = pg

const connectionString = process.env.DATABASE_URL
 
export const db = new Pool({
  allowExitOnIdle: true,
  connectionString
})

try {
    await db.query('SELECT NOW()')
    console.log('DATABASE connected')
} catch (error) {
    console.log("error")
}

const dbConecction = async() => {
    const client = new Client({
        user: 'tu_usuario',
        host: 'tu_host',
        database: 'tu_base_de_datos',
        password: 'tu_contraseña',
        port: 5432, // Puerto estándar de PostgreSQL
      });

      // Conectar a la base de datos
      
      try {
        client.connect()
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.log(error)
        throw new Error("Error al conectar a la base de datos");
    }

} 
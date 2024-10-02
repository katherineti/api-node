//user.controller.js
import { request, response } from "express"
import 'dotenv/config'
import {dbConecction} from '../database/config.db.js'

const db = dbConecction

const get = async (req, res) => {

    try {
      const { rows } = await db.query('SELECT * FROM users');
  
      if (rows.length === 0) {
        return res.status(404).json({ message: 'No data found' });
      }
  
      return res.status(200).json(rows);
    } catch (error) {
      console.error('Error al obtener registros:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

const getById = async (req, res) => {
    
    const { id } = req.query;
  
    if (!id) {
      return res.status(400).json({ message: 'Invalid id' });
    }
  
    try {
      const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json(rows[0]);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

const post = async(req, res= response) => {

    const { name, email } = req.body

      // Validate input
    if (!name || !email) return res.status(400).json({ message: 'Missing required fields: name and email' });

    try {
        
        const { rows : existUser } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existUser.length > 0) {
          return res.status(409).json({ message: 'Email already exists' });
        }
        
        const {rows} = await db.query('INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    
        return res.status(201).json({
            ok:true,
            message: 'Usuario creado',
            data: rows[0]
        })
        
    } catch (error) {
        console.error(error);

        if(error?.code === "23505"){
            return res.status(409).json({ message: 'Email already exists' });
        }

        return res.status(500).json({ message: 'Internal server error' });
    }
    
}

const put = async(req, res= response) => {

    const id = req.params.id;
    const body = req.body

    if(!id) return res.status(400).json({ message: 'Invalid id' })
    if(Object.keys(body).length === 0) return res.status(400).json({ message: 'Missing data' })
    if (!body.name || !body.email) return res.status(400).json({ message: 'Missing required fields: name and email' });
    
    try {
        // Verificar si el usuario existe 
        const { rows: existingUserRows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        if (existingUserRows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const {rows} = await db.query('UPDATE users SET name= $1, email= $2 WHERE id= $3 RETURNING *', [body.name, body.email, id]);

        return res.status(200).json({
            ok: true,
            message: 'Usuario actualizado',
            data: rows[0],
        });

    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

const del = async (req, res) => {
    
    const id = req.params.id;
  
    if (!id) {
      return res.status(400).json({ message: 'Invalid id' });
    }
  
    try {
      const { rowCount } = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  
      if (rowCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({
        ok: true,
        message: 'User deleted',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};

export const UserController = {
    get,
    getById,
    post,
    put,
    del,
}
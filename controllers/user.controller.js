//user.controller.js
import { request, response } from "express"
import 'dotenv/config'
import {dbConecction} from '../database/config.db.js'

 const db = dbConecction

const getAll = async(req, res= response )  => {
    res.status(403).json({
        message: 'get API RESTful - Controller'
    })
}

const get = async(req=request, res= response )  => {

    const { id } = req.query;

    const {rows} = await db.query('SELECT * FROM users WHERE id=$1', [id]);

    if(rows.length === 0) return res.status(404).json({ message: 'User not found' })
    
    res.status(403).json(rows)
}

const post = async(req, res= response) => {

    const { name, age } = req.body

    res.status(403).json({
        message: 'post API RESTful - Controller',
        name,
        age
    })
}

const put = async(req, res= response) => {

    const id = req.params.id;

    res.status(403).json({
        message: 'put API RESTful - Controller',
        id
    })
}

const patch = async(req, res) => {
    res.status(403).json({
          message: 'patch API RESTful - Controller'
      })
  }


const del = async(req, res) => {

    const id = req.params.id;

    const {rows, rowCount} = await db.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]); //despues de eliminar, retorna dichos acampos

    if(rowCount === 0){
        return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ 
        message: 'User deleted',
        rows
    });
}

export const UserController = {
    get,
    post,
    put,
    patch,
    del,
}
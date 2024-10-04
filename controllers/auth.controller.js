import { response } from "express"
import 'dotenv/config'
import {dbConecction} from '../database/config.db.js'

const db = dbConecction

const login = async(req, res= response) => {

    const { email, password } = req.body

     // Validate input
     if (!email || !password) return res.status(400).json({ message: 'Missing required fields: email and password' });

    try {
        
        return res.status(200).json({
            ok:true,
            message: 'Login',
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    
}

export const authController = {
    login
}
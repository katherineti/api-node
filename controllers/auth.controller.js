import { response } from "express"
import 'dotenv/config'
import {dbConecction} from '../database/config.db.js'
// import { User } from "models/user.mode.js"

const db = dbConecction

const login = async(req, res= response) => {

    const { email, password } = req.body

     // Verificar si el email existe
     if (!email || !password) return res.status(400).json({ message: 'Missing required fields: email and password' });
    //  const user = await User.findOne({email})
    if( !user ){
        return restart.status(400).json({
            msg: 'Usuario/password no son correctos'
        })
    }

     //Si el usuario esta activo en la BD

     //Verificar la co n trasena

     //Generar el JWT

    try{
        
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
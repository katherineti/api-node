import { response } from "express"
import 'dotenv/config'
import {dbConecction} from '../database/config.db.js'
import jwt from "jsonwebtoken"
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

const sigin = async(req, res= response) => {
    try {
      const { email, password } = req.body;

     if (!email || !password) return res.status(400).json({ message: 'Missing required fields: email and password' });
  
      // Validate user input here (e.g., using a validation library)
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate access token
      const accessToken = jwt.sign(
        { userId: user._id }, 
        JWT_SECRET, 
        { expiresIn: '1h' }
      );
  
      // Generate refresh token with longer expiration
      const refreshToken = jwt.sign(
        { userId: user._id }, 
        REFRESH_TOKEN_SECRET, 
        { expiresIn: '7d' }
      );
  
      res.json({
        message: 'Login successful',
        accessToken,
        refreshToken
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
}

const signup = async(req, res= response) => {
    try {
      const { username, email, password } = req.body;
  
      // Validate user input here (e.g., using a validation library)
  
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      
      //guardar
      const user = new User({ username, email, password });
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Registration failed' });
    }
  }

export const authController = {
    signup,
    sigin,
    login,
}
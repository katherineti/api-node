import express from "express"
import cors from "cors"

import { Router } from 'express'; // Import Router from express
import userRoutes from './../routes/user.route.js'; // Import the whole module
import authRoutes from './../routes/auth.route.js'; // Import the whole module
import morgan from 'morgan'
import { PORT } from "../const.js";
import bcrypt from "bcrypt"

export const Server = class {

    constructor(){
        this.app = express();
        this.port = PORT;
        this.usersPath = '/api/users'
        this.authPath = '/api/auth'

        this.database();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    async database(){
        // await dbconecction()
    }

    middlewares(){
        //Cors
        this.app.use( cors() )

        //Logs
        this.app.use(morgan('dev'))

        //Lectura y parseo del body
        this.app.use(express.json())

        //Url encoded
        this.app.use(express.urlencoded({ extended: true }))

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use( this.authPath, authRoutes )
        this.app.use( this.usersPath, userRoutes )
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}
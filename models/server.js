import express from "express"
import cors from "cors"

import { Router } from 'express'; // Import Router from express
import userRoutes from './../routes/user.route.js'; // Import the whole module

export const Server = class {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() )

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use( this.usersPath, userRoutes )
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}
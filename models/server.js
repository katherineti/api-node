import express from "express"
import cors from "cors"

//file routes
import {user} from '../routes/user.js'; 

export const Server = class {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

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
        this.app.use( '/api/users', user )
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}
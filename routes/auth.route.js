import { Router } from 'express';
import { check } from 'express-validator';
import { authController } from './../controllers/auth.controller.js'; // Import the whole module

const router = Router();

router.post('/login',[
        check('correo','El correo es obligatorio').isEmail()
    ],  authController.login );

export default router;
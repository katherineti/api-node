import { Router } from 'express';
import { check } from 'express-validator';
import { authController } from './../controllers/auth.controller.js'; // Import the whole module
// import { validarCampos } from './../middlewares/validar-campos'; // Import the whole module

const router = Router();

router.post('/login',[
        check('email','El correo es obligatorio').isEmail(),
        check('password','La contrasena es obligatoria').not().isEmpty(),
        // validarCampos
    ],  authController.login );

export default router;
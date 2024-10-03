import { Router } from 'express';
import { check } from 'express-validator';
import { authController } from '../controllers/auth.controller';

const router = Router();

router.get('/login', [
    check('correo','El correo es obligatorio').isEmail()
], authController.login );

export default router;
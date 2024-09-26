import { Router } from 'express';
import { UserController } from './../controllers/user.controller.js'; // Import the whole module

const router = Router();

router.get('/', UserController.get )

router.post('/', UserController.post)

router.put('/', UserController.put)

router.patch('/', UserController.patch)

router.delete('/', UserController.del)

export default router;
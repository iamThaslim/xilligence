import express from 'express';
import { deleteUser, findAll, findOne, login, registerUser, update } from '../controllers/userCntrl.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/:id', findOne);
router.get('/', findAll);
router.put('/:id', update);
router.delete('/:id', deleteUser);

export default router;
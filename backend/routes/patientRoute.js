import express from 'express';
import { create, findAll, findOne, softDelete, update } from '../controllers/patientCntrl.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post('/create', authMiddleware, create);
router.get('/',authMiddleware, findAll);
router.get('/:id',authMiddleware, findOne);
router.put('/:id',authMiddleware, softDelete );
router.delete('/:id',authMiddleware, update);

export default router;
import { Router } from "express";
import { createToDo } from '../controllers/todos'

const router = Router();

router.post('/', createToDo);
router.get('/');
router.patch('/:id');
router.delete('/:id');

export default router;



import { Router } from 'express';
import { postSchema, validate, patchSchema } from '../middleware/validator';
import {
  getTodosHandler,
  getTodoByIdHandler,
  createTodoHandler,
  deleteTodoHandler,
  updateTodoHandler,
} from '../controller/todo.controller';
import { handleError } from '../middleware/errorhandler';

export const router = Router();

router.get('/', handleError(getTodosHandler));

router.get('/:id', handleError(getTodoByIdHandler));

router.post('/', validate(postSchema), handleError(createTodoHandler));

router.patch('/:id', validate(patchSchema), handleError(updateTodoHandler));

router.delete('/:id', handleError(deleteTodoHandler));

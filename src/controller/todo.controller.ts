import { Request, Response } from 'express';
// import jsonstream from 'jsonstream';
import { ITodo } from '../interfaces';
import {
  getTodo,
  getTodosStream,
  getTodosPage,
  saveTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
} from '../service/todo.service';

export async function getTodosHandler(req: Request, res: Response) {
  if (req.query.page) {
    return getTodosPaginateHandler(req, res);
  }

  const todos = await getAllTodos();
  res.status(200).send(todos);
  // getTodosStream().pipe(jsonstream.stringify()).pipe(res.status(200).type('json'));
}

export async function getTodoByIdHandler(req: Request, res: Response) {
  const { id } = req.params;

  const todo = await getTodo(id);

  if (todo) {
    res.status(200).send(todo);
  }
  res.sendStatus(404);
}

export async function createTodoHandler(req: Request, res: Response) {
  const todo: ITodo = req.body;

  saveTodo(todo);
  res.sendStatus(201);
}

export async function updateTodoHandler(req: Request, res: Response) {
  const newTodo: ITodo = req.body;
  const { id } = req.params;

  const todo = await getTodo(id);
  if (!todo) {
    res.sendStatus(404);
  }

  await updateTodo(id, newTodo);
  res.sendStatus(204);
}

export async function deleteTodoHandler(req: Request, res: Response) {
  const { id } = req.params;

  const deletedTodo = await getTodo(id);
  if (!deletedTodo) {
    res.sendStatus(404);
  }

  await deleteTodo(id);
  res.sendStatus(204);
}

async function getTodosPaginateHandler(req: Request, res: Response) {
  const { page = 0, limit = 10 } = req.query;

  const todos = await getTodosPage(+page, +limit);
  res.status(200).send(todos);
}

import { QueryCursor } from 'mongoose';
import { todoModel } from '../model/todo.model';
import { ITodo, PageInfo, Pages } from '../interfaces';

export async function getTodo(id: string): Promise<ITodo | null> {
  return await todoModel.findById(id).lean();
}

export async function getAllTodos(): Promise<ITodo[]> {
  return await todoModel.find().lean();
}

export async function getTodosPage(page: number, limit: number): Promise<Pages> {
  const skip = page * limit;
  const totalElements = await todoModel.count().exec();
  const totalPages = Math.trunc(totalElements / limit);

  const pageInfo: PageInfo = {
    totalPages: totalPages,
    currentPage: page,
    limit: limit,
    totalElements: totalElements,
  };
  const todos = await todoModel.find().skip(skip).limit(limit);
  return { todos, pageInfo };
}

export function getTodosStream(): QueryCursor<ITodo> {
  return todoModel.find().cursor();
}

export async function saveTodo(todo: ITodo): Promise<ITodo> {
  const newTodo = new todoModel({ message: todo.message, completed: todo.completed });
  return await newTodo.save();
}

export async function updateTodo(id: string, todo: ITodo): Promise<ITodo | null> {
  return todoModel.findByIdAndUpdate(id, todo).lean();
}

export async function deleteTodo(id: string): Promise<ITodo | null> {
  return await todoModel.findByIdAndDelete(id).lean();
}

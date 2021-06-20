import { QueryCursor } from 'mongoose';
import { todoModel } from '../model/todo.model';
import { ITodo } from '../interfaces';

export async function getTodo(id: string): Promise<ITodo | null> {
  return await todoModel.findById(id).lean();
}

export async function getTodosPage(page: number, limit: number): Promise<ITodo[]> {
  const skip = page * limit;
  return await todoModel.find().skip(skip).limit(limit).lean();
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

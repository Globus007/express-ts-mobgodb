import { Schema, model } from 'mongoose';
import { ITodo } from '../interfaces';

const todoSchema = new Schema<ITodo>(
  {
    message: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const todoModel = model<ITodo>('Todo', todoSchema);

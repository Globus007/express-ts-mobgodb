import mongoose from 'mongoose';

export interface ITodo extends mongoose.Document {
  _id: string;
  message: string;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

import mongoose from 'mongoose';

export interface ITodo extends mongoose.Document {
  _id: string;
  message: string;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pages {
  todos: ITodo[];
  pageInfo: PageInfo;
}

export interface PageInfo {
  totalPages: number;
  currentPage: number;
  limit: number;
  totalElements: number;
}

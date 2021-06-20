import { Request, Response, NextFunction } from 'express';
import { log } from '../logging';

export function handleError(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  log.error(err);
  res.status(500).send({ message: 'Something went wrong' });
}

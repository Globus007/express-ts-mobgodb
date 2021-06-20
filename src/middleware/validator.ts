import { object, string, AnySchema, boolean } from 'yup';
import { Request, Response, NextFunction } from 'express';
import { log } from '../logging';

export const postSchema = object({
  body: object({
    message: string().required(),
    completed: boolean(),
  }),
});

export const patchSchema = object({
  body: object({
    message: string(),
    completed: boolean(),
  }),
});

export const validate =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (e) {
      log.error(e);
      return res.status(400).send(e.errors);
    }
  };

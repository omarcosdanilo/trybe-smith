import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(Number(err.name)).json({ message: err.message });
};

export default errorMiddleware;
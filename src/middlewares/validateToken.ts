import jwt, { JsonWebTokenError } from 'jsonwebtoken';

import { Response, NextFunction } from 'express';
import ReqUser from '../interfaces/reqUser.interface';

const validateToken = async (req: ReqUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const secret = 'segredo';

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);

    const payload = Object.entries(decoded);

    const [, data] = payload[0];

    req.user = data;
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
};

export default validateToken;
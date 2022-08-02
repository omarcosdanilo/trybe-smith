import { Request } from 'express';

export default interface ReqUser extends Request {
  user?: {
    id: number;
    username: string;
    classe: string;
    level: number
  }
}
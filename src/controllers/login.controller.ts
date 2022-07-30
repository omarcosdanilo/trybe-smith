import { Request, Response } from 'express';
import loginService from '../services/login.service';
import generateToken from '../utils/generateToken';

const loginController = {
  async login(req: Request, res: Response) {
    await loginService.validateParams(req.body);
    const { id } = await loginService.getUser(req.body);
    const token = await generateToken({ id, ...req.body });

    res.status(200).json({ token });
  },
};

export default loginController;
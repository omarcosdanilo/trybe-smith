import { Request, Response } from 'express';
import userService from '../services/user.service';
import generateToken from '../utils/generateToken';

const usersController = {
  async create(req: Request, res: Response) {
    await userService.validateUserName(req.body.username);
    await userService.validateClass(req.body.classe);
    await userService.validateLevel(req.body.level);
    await userService.validatePassword(req.body.password);

    const id = await userService.create(req.body);
    const token = await generateToken({ id, ...req.body });

    res.status(201).json({ token });
  },
};

export default usersController;
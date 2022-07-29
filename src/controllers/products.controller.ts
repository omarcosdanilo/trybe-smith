import { Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = {
  async create(req: Request, res: Response) {
    const id = await productsService.create(req.body);

    res.status(201).json({ id, ...req.body });
  },
};

export default productsController;
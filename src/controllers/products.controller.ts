import { Request, Response } from 'express';
import productsService from '../services/products.service';

const productsController = {
  async create(req: Request, res: Response) {
    await productsService.validateName(req.body.name);
    await productsService.validateAmount(req.body.amount);

    const id = await productsService.create(req.body);

    res.status(201).json({ id, ...req.body });
  },

  async getAll(req: Request, res: Response) {
    const products = await productsService.getAll();

    res.json(products);
  },
};

export default productsController;
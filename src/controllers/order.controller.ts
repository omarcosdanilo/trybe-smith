import { Request, Response, NextFunction } from 'express';
import ReqUser from '../interfaces/reqUser.interface';
import orderService from '../services/order.service';

const orderController = {
  async getAll(_req: Request, res: Response) {
    const orders = await orderService.getAll();

    res.status(200).json(orders);
  },

  async create(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { productsIds } = req.body;
  
      await orderService.validateProductIds(productsIds);
  
      const order = await orderService.create(productsIds, req.user?.id);
  
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  },
};

export default orderController;
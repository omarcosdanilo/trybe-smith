import { Request, Response } from 'express';
import orderService from '../services/order.service';

const orderController = {
  async getAll(req: Request, res: Response) {
    const orders = await orderService.getAll();

    res.status(200).json(orders);
  },
};

export default orderController;
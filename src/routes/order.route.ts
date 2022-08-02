import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateToken from '../middlewares/validateToken';

const orderRouter = Router();

orderRouter.get('/', orderController.getAll);
orderRouter.post('/', validateToken, orderController.create);

export default orderRouter;
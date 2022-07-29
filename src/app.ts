import express, { Router } from 'express';
import productsRouter from './routes/products.route';
import usersRouter from './routes/users.route';
import orderRouter from './routes/order.route';

const app = express();

app.use(express.json());

export const router = Router();

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

export default app;

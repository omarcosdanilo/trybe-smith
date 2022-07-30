import express, { Router } from 'express';
import 'express-async-errors';
import productsRouter from './routes/products.route';
import usersRouter from './routes/users.route';
import orderRouter from './routes/order.route';
import loginRouter from './routes/login.route';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

export const router = Router();

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

export default app;

import express, { Router } from 'express';
import productsRouter from './routes/products.route';

const app = express();

app.use(express.json());

export const router = Router();

app.use('/products', productsRouter);

export default app;

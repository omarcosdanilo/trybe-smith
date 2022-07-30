import { Product } from '../interfaces/product.interface';
import productsModel from '../models/products.model';
import throwError from '../utils/throwError';

const productsService = {
  async create(payload: Product) {
    const id = await productsModel.create(payload);

    return id;
  },

  async getAll(): Promise<Product[]> {
    const data = await productsModel.getAll();

    return data;
  },

  async validateAmount(amount: string) {
    if (!amount) throwError('400', '"amount" is required');
    if (typeof amount !== 'string') throwError('422', '"amount" must be a string');
    if (amount.length < 3) {
      throwError('422', '"amount" length must be at least 3 characters long');
    }
  },

  async validateName(name: string) {
    if (!name) throwError('400', '"name" is required');
    if (typeof name !== 'string') throwError('422', '"name" must be a string');
    if (name.length < 3) {
      throwError('422', '"name" length must be at least 3 characters long');
    }
  },
};

export default productsService;
import { Product } from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const productsService = {
  async create(payload: Product) {
    const id = await productsModel.create(payload);

    return id;
  },

  async getAll(): Promise<Product[]> {
    const data = await productsModel.getAll();

    return data;
  },
};

export default productsService;
import { Product } from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const productsService = {
  async create(payload: Product) {
    const id = await productsModel.create(payload);

    return id;
  },
};

export default productsService;
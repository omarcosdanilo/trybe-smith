import orderModel from '../models/order.model';
import productsModel from '../models/products.model';
import throwError from '../utils/throwError';

const orderService = {
  async getAll() {
    const orders = await orderModel.getAll();

    return orders;
  },

  async validateProductIds(productsIds: number[]) {
    if (!productsIds) throwError('400', '"productsIds" is required');
    if (!Array.isArray(productsIds)) throwError('422', '"productsIds" must be an array');
    if (productsIds.length === 0) throwError('422', '"productsIds" must include only numbers');
    if (productsIds.some((id) => typeof id !== 'number')) {
      throwError('422', '"productsIds" must include only numbers');
    }
  },

  async getById(ids: number[]) {
    const products = await Promise.all(
      ids.map((id) => orderModel.getById(id)),
    );

    const reduced = products.reduce((acc, currValue) => acc.concat(currValue), []);

    return reduced;
  },

  async create(productsIds: number[], userId: number | undefined) {
    const orderId = await orderModel.create(userId);

    const ids = await Promise.all(
      productsIds.map((id) => {
        productsModel.update(id, orderId);
        return id;
      }),
    );

    return { userId, productIds: ids };
  },
};

export default orderService;
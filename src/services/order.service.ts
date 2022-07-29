import orderModel from '../models/order.model';

const orderService = {
  async getAll() {
    const orders = await orderModel.getAll();

    return orders;
  },
};

export default orderService;
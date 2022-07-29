import { RowDataPacket } from 'mysql2';
import connection from './connection';

const orderModel = {
  async getAll(): Promise<RowDataPacket[]> {
    const query = `
    SELECT 
      o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Products as p
    INNER JOIN Trybesmith.Orders as o
    ON p.orderId = o.id
    GROUP BY o.id, o.userId
    ORDER BY o.userId;
  `;

    const [result] = await connection.query<RowDataPacket[]>(query);

    return result as RowDataPacket[];
  },
};

export default orderModel;
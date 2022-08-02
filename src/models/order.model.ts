import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../interfaces/product.interface';
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

  async getById(id: number): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products WHERE id = ?';

    const [product] = await connection.query(query, [id]);

    return product as Product[];
  }, 

  async create(id: number | undefined): Promise<number> {
    const query = `
    INSERT INTO
    Trybesmith.Orders (userId)
    VALUES
    (?)`;

    const [{ insertId }] = await connection.query<ResultSetHeader>(query, [id]);

    return insertId;
  },
};

export default orderModel;
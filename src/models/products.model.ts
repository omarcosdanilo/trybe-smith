import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../interfaces/product.interface';
import connection from './connection';

const productsModel = {
  async create(payload: Product): Promise<Product['id']> {
    const { name, amount } = payload;
    const query = `
    INSERT INTO
    Trybesmith.Products (name, amount)
    VALUES
    (?, ?)`;

    const [result] = await connection.query<ResultSetHeader>(query, [name, amount]);

    const { insertId } = result;

    return insertId;
  },

  async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [data] = await connection.query<RowDataPacket[]>(query);

    return data as Product[];
  },

  async update(id: number, orderId: number) {
    const query = `
      UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?
    `;

    await connection.query(query, [orderId, id]);
  },
};

export default productsModel;
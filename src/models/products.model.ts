import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/product.interface';
import connection from './connection';

const productsModel = {
  async create(payload: Product): Promise<Product['id']> {
    const { name, amount } = payload;
    const query = `INSERT INTO
    Trybesmith.Products (name, amount)
    VALUES
    (?, ?)`;

    const [result] = await connection.query<ResultSetHeader>(query, [name, amount]);

    const { insertId } = result;

    return insertId;
  },
};

export default productsModel;
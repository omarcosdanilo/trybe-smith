import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Login } from '../interfaces/login.interface';

const loginModel = {
  async getUser(user: Login): Promise<Login> {
    const query = `
    SELECT * FROM Trybesmith.Users
    WHERE username = ?`;

    const [[data]] = await connection.query<RowDataPacket[]>(query, [user.username]);

    return data as Login;
  },
};

export default loginModel;
import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/user.interface';

const userModel = {
  async create(user: User) {
    const { username, classe, level, password } = user;

    const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES(?, ?, ?, ?);
    `;

    const [result] = await connection.query<ResultSetHeader>(query, [
      username, classe, level, password,
    ]);

    const { insertId } = result;

    return insertId;
  },
};

export default userModel;
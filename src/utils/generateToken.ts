import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

const generateToken = async (user: User) => {
  const secret = 'segredo';
  
  const { password, ...newUser } = user;
  const token = jwt.sign({ data: newUser }, secret);

  return token;
};

export default generateToken;
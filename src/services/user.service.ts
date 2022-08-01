import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import throwError from '../utils/throwError';

const userService = {
  async create(newUser: User) {
    const id = await userModel.create(newUser);

    return id;
  },
  
  async validateClass(classe: string) {
    const lengthErrorMessage = '"classe" length must be at least 3 characters long';

    if (!classe) throwError('400', '"classe" is required');
    if (typeof classe !== 'string') throwError('422', '"classe" must be a string');
    if (classe.length < 3) throwError('422', lengthErrorMessage);
  },

  async validatePassword(pass: string) {
    const lengthErrorMessage = '"password" length must be at least 8 characters long';

    if (!pass) throwError('400', '"password" is required');
    if (typeof pass !== 'string') throwError('422', '"password" must be a string');
    if (pass.length < 8) throwError('422', lengthErrorMessage);
  },

  async validateLevel(level: number) {
    if (level < 1) throwError('422', '"level" must be greater than or equal to 1');
    if (!level) throwError('400', '"level" is required');
    if (typeof level !== 'number') throwError('422', '"level" must be a number');
  },

  async validateUserName(userName: string) {
    const lengthErrorMessage = '"username" length must be at least 3 characters long';
    if (!userName) throwError('400', '"username" is required');
    if (typeof userName !== 'string') throwError('422', '"username" must be a string');
    if (userName.length < 3) throwError('422', lengthErrorMessage);
  },
};

export default userService;
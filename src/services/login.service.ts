import { Login } from '../interfaces/login.interface';
import loginModel from '../models/login.model';
import throwError from '../utils/throwError';

const loginService = {
  async validateParams(unknown: Login) {
    if (!unknown.username) {
      throwError('400', '"username" is required');
    }
    if (!unknown.password) {
      throwError('400', '"password" is required');
    }
  },

  async validateUser(user: Login, reqUser: Login) {
    const message = 'Username or password invalid';
    if (!user) {
      throwError('401', message);
    }

    const { username, password } = user;

    if (username !== reqUser.username) {
      throwError('401', message);
    }

    if (password !== reqUser.password) {
      throwError('401', message);
    }
  },

  async getUser(payload: Login) {
    const user = await loginModel.getUser(payload);
    await this.validateUser(user, payload);
    return user;
  },
};

export default loginService;
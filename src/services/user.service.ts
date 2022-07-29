import { User } from '../interfaces/user.interface';
import userModel from '../models/user.model';

const userService = {
  async create(newUser: User) {
    const id = await userModel.create(newUser);

    return id;
  },
};

export default userService;
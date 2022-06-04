import { UserModel } from '../model/UserModel';

interface IUserRepository {
  getToken(user: UserModel): string;
}

export { IUserRepository };

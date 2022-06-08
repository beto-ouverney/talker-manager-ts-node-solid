import { User } from '../model/User';

interface IUserRepository {
  getToken(user: User): string;
}

export { IUserRepository };

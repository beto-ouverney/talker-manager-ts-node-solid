import { User } from '../entities/User';

interface IUserRepository {
  getToken(user: User): string;
}

export { IUserRepository };

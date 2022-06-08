import CryptoJS from 'crypto-js';
import { User } from '../model/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
  private static INSTANCE: UserRepository;

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  getToken(user: User) {
    const token = CryptoJS.AES.encrypt(user.email, user.password);
    return token.salt.toString();
  }
}

export { UserRepository };

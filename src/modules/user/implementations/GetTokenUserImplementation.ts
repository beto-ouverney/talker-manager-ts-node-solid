import CryptoJS from 'crypto-js';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

class GetTokenUserImplementation implements IUserRepository {
  getToken(user: User) {
    const token = CryptoJS.AES.encrypt(user.email, user.password);
    return token.salt.toString();
  }
}

export { GetTokenUserImplementation };

import { User } from '../model/User';
import { IUserRepository } from '../repositories/IUserRepository';

class UserAutorizationUseCase {
  iUserRepository: IUserRepository;

  constructor(iUserRepository: IUserRepository) {
    this.iUserRepository = iUserRepository;
  }

  getToken(user: User) {
    const token = this.iUserRepository.getToken(user);
    return token;
  }
}

export { UserAutorizationUseCase };

import { UserModel } from '../model/UserModel';
import { IUserRepository } from '../repositories/IUserRepository';

class UserAutorizationUseCase {
  iUserRepository: IUserRepository;

  constructor(iUserRepository: IUserRepository) {
    this.iUserRepository = iUserRepository;
  }

  getToken(user: UserModel) {
    const token = this.iUserRepository.getToken(user);
    return token;
  }
}

export { UserAutorizationUseCase };

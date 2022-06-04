import { UserAutorizationController } from '../controllers/UserAutorizationController';
import { UserRepository } from '../repositories/UserRepository';
import { UserAutorizationUseCase } from '../useCase/UserAutorizationUseCase';

const userRepository = UserRepository.getInstance();
const userAutorizationUseCase = new UserAutorizationUseCase(userRepository);
const userAutorizationImplementation = new UserAutorizationController(
  userAutorizationUseCase
);

export { userAutorizationImplementation };

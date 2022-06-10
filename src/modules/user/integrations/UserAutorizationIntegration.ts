import { UserAutorizationController } from '../controllers/UserAutorizationController';
import { GetTokenUserImplementation } from '../implementations/GetTokenUserImplementation';
import { UserAutorizationUseCase } from '../useCase/UserAutorizationUseCase';

const userRepository = new GetTokenUserImplementation();
const userAutorizationUseCase = new UserAutorizationUseCase(userRepository);
const userAutorizationIntegration = new UserAutorizationController(
  userAutorizationUseCase
);

export { userAutorizationIntegration };

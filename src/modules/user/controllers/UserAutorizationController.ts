import { UserAutorizationUseCase } from '../useCase/UserAutorizationUseCase';
import { Request, Response } from 'express';
import { UserValidations } from '../integrations/UserValidations';

class UserAutorizationController {
  userAutorizationUseCase: UserAutorizationUseCase;

  constructor(userAutorizationUseCase: UserAutorizationUseCase) {
    this.userAutorizationUseCase = userAutorizationUseCase;
  }

  handle(request: Request, response: Response): Response {
    const {
      body: { email, password },
    } = request;
    const userValidations = new UserValidations({ email, password });
    const error = userValidations.getValidations();
    if (!error) {
      const result = this.userAutorizationUseCase.getToken({ email, password });
      return response.json({ token: result });
    }
    return response.status(error.status).json({ message: error.message });
  }
}

export { UserAutorizationController };

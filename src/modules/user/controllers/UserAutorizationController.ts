import { UserAutorizationUseCase } from '../useCase/UserAutorizationUseCase';
import { Request, Response } from 'express';

class UserAutorizationController {
  userAutorizationUseCase: UserAutorizationUseCase;

  constructor(userAutorizationUseCase: UserAutorizationUseCase) {
    this.userAutorizationUseCase = userAutorizationUseCase;
  }

  handle(request: Request, response: Response): Response {
    const {
      body: { email, password },
    } = request;

    const result = this.userAutorizationUseCase.getToken({ email, password });
    return response.json({ token: result });
  }
}

export { UserAutorizationController };

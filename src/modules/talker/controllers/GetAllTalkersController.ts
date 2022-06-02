import { Request, Response } from 'express';
import { GetAllTalkersUseCase } from '../useCase/GetAllTalkersUseCase';

class GetAllTalkersController {
  getAllTalkersUseCase: GetAllTalkersUseCase;

  constructor(getAllTalkersUseCase: GetAllTalkersUseCase) {
    this.getAllTalkersUseCase = getAllTalkersUseCase;
  }

  async handle(_: Request, response: Response): Promise<Response> {
    const talkers = await this.getAllTalkersUseCase.execute();
    return response.json(talkers);
  }
}

export { GetAllTalkersController };

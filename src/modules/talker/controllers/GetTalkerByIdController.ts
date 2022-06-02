import { Request, Response } from 'express';
import { GetTalkerByIdUseCase } from '../useCase/GetTalkerByIdUseCase';

class GetTalkerByIdController {
  getTalkerByIdUseCase: GetTalkerByIdUseCase;

  constructor(getTalkerByIdUseCase: GetTalkerByIdUseCase) {
    this.getTalkerByIdUseCase = getTalkerByIdUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const talker = await this.getTalkerByIdUseCase.execute(Number(id));
    const result = talker
      ? response.json(talker)
      : response
          .status(404)
          .json({ message: 'Pessoa palestrante não encontrada' });
    return result;
  }
}
export { GetTalkerByIdController };

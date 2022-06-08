import { Request, Response } from 'express';
import { DeleteTalkerUseCase } from '../useCase/DeleteTalkerUseCase';

class DeleteTalkerController {
  deleteTalkerUseCase: DeleteTalkerUseCase;

  constructor(deleteTalkerUseCase: DeleteTalkerUseCase) {
    this.deleteTalkerUseCase = deleteTalkerUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const result = await this.deleteTalkerUseCase.execute(Number(id));
    return response.status(result).json();
  }
}

export { DeleteTalkerController };

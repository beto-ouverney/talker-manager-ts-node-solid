import { Request, Response } from 'express';
import { TokenValidations } from '../integrations/TokenValidations';
import { DeleteTalkerUseCase } from '../useCase/DeleteTalkerUseCase';

class DeleteTalkerController {
  deleteTalkerUseCase: DeleteTalkerUseCase;

  constructor(deleteTalkerUseCase: DeleteTalkerUseCase) {
    this.deleteTalkerUseCase = deleteTalkerUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      headers: { authorization: token },
    } = request;
    const tokenValidations = new TokenValidations();
    const errorToken = tokenValidations.validationToken(token);
    if (errorToken) {
      return response
        .status(errorToken.status)
        .json({ message: errorToken.message });
    }

    const { id } = request.params;
    const result = await this.deleteTalkerUseCase.execute(Number(id));
    return response.status(result).json();
  }
}

export { DeleteTalkerController };

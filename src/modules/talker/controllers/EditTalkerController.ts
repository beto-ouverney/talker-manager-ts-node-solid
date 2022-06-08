import { Request, Response } from 'express';
import { Talker } from '../entities/Talker';
import { EditTalkerUseCase } from '../useCase/EditTalkerUseCase';

class EditTalkerController {
  editTalkerUseCase: EditTalkerUseCase;

  constructor(editTalkerUseCase: EditTalkerUseCase) {
    this.editTalkerUseCase = editTalkerUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      body: { name, age, talk },
    } = request;
    const { id } = request.params;
    const talker = new Talker(name, Number(age), Number(id), talk);
    const talkerEdited = await this.editTalkerUseCase.execute(talker);
    return response.json(talkerEdited);
  }
}

export { EditTalkerController };

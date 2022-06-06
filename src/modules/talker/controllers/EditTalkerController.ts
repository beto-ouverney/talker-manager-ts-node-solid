import { Request, Response } from 'express';
import { TalkerValidations } from '../integrations/TalkerValidations';
import { TokenValidations } from '../integrations/TokenValidations';
import { TalkerModel } from '../model/TalkerModel';
import { EditTalkerUseCase } from '../useCase/EditTalkerUseCase';

class EditTalkerController {
  editTalkerUseCase: EditTalkerUseCase;

  constructor(editTalkerUseCase: EditTalkerUseCase) {
    this.editTalkerUseCase = editTalkerUseCase;
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

    const {
      body: { name, age, talk },
    } = request;
    const { id } = request.params;
    const talker = new TalkerModel(name, Number(age), Number(id), talk);
    const talkerValidations = new TalkerValidations(talker);
    const errorTalker = talkerValidations.validateTalker();
    if (errorTalker) {
      return response
        .status(errorTalker.status)
        .json({ message: errorTalker.message });
    }

    const talkerEdited = await this.editTalkerUseCase.execute(talker);
    return response.json(talkerEdited);
  }
}

export { EditTalkerController };

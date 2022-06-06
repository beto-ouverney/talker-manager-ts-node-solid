import { Request, Response } from 'express';
import { error } from '../../../data/error';
import { TalkerValidations } from '../integrations/TalkerValidations';
import { TokenValidations } from '../integrations/TokenValidations';
import { TalkerModel } from '../model/TalkerModel';
import { CreateTalkerUseCase } from '../useCase/CreateTalkerUseCase';

class CreateTalkerController {
  createTalkerUseCase: CreateTalkerUseCase;

  constructor(createTalkerUseCase: CreateTalkerUseCase) {
    this.createTalkerUseCase = createTalkerUseCase;
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
    const newTalker = new TalkerModel(name, Number(age), 0, talk);
    const talkerValidations = new TalkerValidations(newTalker);
    const errorTalker = talkerValidations.validateTalker();
    if (errorTalker) {
      return response
        .status(errorTalker.status)
        .json({ message: errorTalker.message });
    }
    const talker = await this.createTalkerUseCase.execute(newTalker);
    return response.status(201).json(talker);
  }
}

export { CreateTalkerController };

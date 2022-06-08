import { Request, Response } from 'express';
import { Talker } from '../entities/Talker';
import { CreateTalkerUseCase } from '../useCase/CreateTalkerUseCase';

class CreateTalkerController {
  createTalkerUseCase: CreateTalkerUseCase;

  constructor(createTalkerUseCase: CreateTalkerUseCase) {
    this.createTalkerUseCase = createTalkerUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      body: { name, age, talk },
    } = request;
    const newTalker = new Talker(name, Number(age), 0, talk);
    const talker = await this.createTalkerUseCase.execute(newTalker);
    return response.status(201).json(talker);
  }
}

export { CreateTalkerController };

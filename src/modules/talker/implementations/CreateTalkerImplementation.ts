import { CreateTalkerController } from '../controllers/CreateTalkerController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { CreateTalkerUseCase } from '../useCase/CreateTalkerUseCase';

const talkerRepository = TalkerRepository.getInstance();
const createTalkerUseCase = new CreateTalkerUseCase(talkerRepository);
const createTalkerImplementation = new CreateTalkerController(
  createTalkerUseCase
);

export { createTalkerImplementation };

import { CreateTalkerController } from '../controllers/CreateTalkerController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { CreateTalkerUseCase } from '../useCase/CreateTalkerUseCase';

const talkerRepository = TalkerRepository.getInstance();
const createTalkerUseCase = new CreateTalkerUseCase(talkerRepository);
const createTalkerIntegration = new CreateTalkerController(createTalkerUseCase);

export { createTalkerIntegration };

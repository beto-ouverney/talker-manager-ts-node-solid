import { GetTalkerByIdController } from '../controllers/GetTalkerByIdController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { GetTalkerByIdUseCase } from '../useCase/GetTalkerByIdUseCase';

const talkerRepository = TalkerRepository.getInstance();
const getTalkerByIdUseCase = new GetTalkerByIdUseCase(talkerRepository);
const getTalkerByIdImplementation = new GetTalkerByIdController(
  getTalkerByIdUseCase
);

export { getTalkerByIdImplementation };

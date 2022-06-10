import { GetTalkerByIdController } from '../controllers/GetTalkerByIdController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { GetTalkerByIdUseCase } from '../useCase/GetTalkerByIdUseCase';

const talkerRepository = TalkerRepository.getInstance();
const getTalkerByIdUseCase = new GetTalkerByIdUseCase(talkerRepository);
const getTalkerByIdIntegration = new GetTalkerByIdController(
  getTalkerByIdUseCase
);

export { getTalkerByIdIntegration };

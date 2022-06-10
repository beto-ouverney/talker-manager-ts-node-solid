import { SearchTalkerController } from '../controllers/SearchTalkerController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { SearchTalkerUseCase } from '../useCase/SearchTalkerUseCase';

const talkerRepository = TalkerRepository.getInstance();
const searchTalkerUseCase = new SearchTalkerUseCase(talkerRepository);
const searchTalkerIntegration = new SearchTalkerController(searchTalkerUseCase);

export { searchTalkerIntegration };

import { EditTalkerController } from '../controllers/EditTalkerController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { EditTalkerUseCase } from '../useCase/EditTalkerUseCase';

const talkerRepository = TalkerRepository.getInstance();
const editTalkerUseCase = new EditTalkerUseCase(talkerRepository);
const editTalkerIntegration = new EditTalkerController(editTalkerUseCase);

export { editTalkerIntegration };

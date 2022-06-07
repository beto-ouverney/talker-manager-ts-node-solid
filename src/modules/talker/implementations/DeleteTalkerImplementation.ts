import { DeleteTalkerController } from '../controllers/DeleteTalkerController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { DeleteTalkerUseCase } from '../useCase/DeleteTalkerUseCase';

const talkerRepository = TalkerRepository.getInstance();
const deleteTalkerUseCase = new DeleteTalkerUseCase(talkerRepository);
const deleteTalkerImplementation = new DeleteTalkerController(
  deleteTalkerUseCase
);

export { deleteTalkerImplementation };

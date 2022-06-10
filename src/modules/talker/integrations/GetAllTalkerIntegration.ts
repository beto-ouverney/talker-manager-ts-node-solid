import { GetAllTalkersController } from '../controllers/GetAllTalkersController';
import { TalkerRepository } from '../repositories/TalkerRepository';
import { GetAllTalkersUseCase } from '../useCase/GetAllTalkersUseCase';

const talkersRepository = TalkerRepository.getInstance();
const getAllTalkersUseCase = new GetAllTalkersUseCase(talkersRepository);
const getAllTalkersIntegration = new GetAllTalkersController(
  getAllTalkersUseCase
);

export { getAllTalkersIntegration };

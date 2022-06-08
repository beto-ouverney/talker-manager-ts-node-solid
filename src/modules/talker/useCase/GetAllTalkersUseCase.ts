import { Talker } from '../entities/Talker';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class GetAllTalkersUseCase {
  iTalkersRepository: ITalkerRepository;

  constructor(talkerRepository: ITalkerRepository) {
    this.iTalkersRepository = talkerRepository;
  }
  async execute(): Promise<Talker[]> {
    const talkers = await this.iTalkersRepository.getAllTalkers();
    return talkers;
  }
}

export { GetAllTalkersUseCase };

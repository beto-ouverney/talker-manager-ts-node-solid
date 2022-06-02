import { TalkerModel } from '../model/TalkerModel';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class GetAllTalkersUseCase {
  iTalkersRepository: ITalkerRepository;

  constructor(talkerRepository: ITalkerRepository) {
    this.iTalkersRepository = talkerRepository;
  }
  async execute(): Promise<TalkerModel[]> {
    const talkers = await this.iTalkersRepository.getAllTalkers();
    return talkers;
  }
}

export { GetAllTalkersUseCase };

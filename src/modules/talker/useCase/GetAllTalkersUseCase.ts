import { TalkerModel } from '../model/TalkerModel';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class GetAllTalkersUseCase {
  talkersRepository: ITalkerRepository;

  constructor(talkerRepository: ITalkerRepository) {
    this.talkersRepository = talkerRepository;
  }
  async execute(): Promise<TalkerModel[]> {
    const talkers = await this.talkersRepository.getAllTalkers();
    console.log('TESTE');
    console.log(talkers);
    return talkers;
  }
}

export { GetAllTalkersUseCase };

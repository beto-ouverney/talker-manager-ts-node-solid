import { TalkerModel } from '../model/TalkerModel';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class CreateTalkerUseCase {
  iTalkerRepository: ITalkerRepository;

  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  async execute(newTalker: TalkerModel): Promise<TalkerModel> {
    const talker = this.iTalkerRepository.createTalker(newTalker);
    return talker;
  }
}

export { CreateTalkerUseCase };

import { Talker } from '../entities/Talker';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class CreateTalkerUseCase {
  iTalkerRepository: ITalkerRepository;

  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  async execute(newTalker: Talker): Promise<Talker> {
    const talker = this.iTalkerRepository.createTalker(newTalker);
    return talker;
  }
}

export { CreateTalkerUseCase };

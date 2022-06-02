import { ITalkerRepository } from '../repositories/ITalkerRepository';

class GetTalkerByIdUseCase {
  iTalkerRepository: ITalkerRepository;
  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  execute(id: number) {
    const talker = this.iTalkerRepository.getTalker(id);
    return talker;
  }
}

export { GetTalkerByIdUseCase };

import { Talker } from '../entities/Talker';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class EditTalkerUseCase {
  iTalkerRepository: ITalkerRepository;
  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  execute(talker: Talker): Promise<Talker> {
    const talkerEdited = this.iTalkerRepository.editTalker(talker);
    return talkerEdited;
  }
}

export { EditTalkerUseCase };

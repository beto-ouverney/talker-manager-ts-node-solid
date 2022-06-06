import { TalkerModel } from '../model/TalkerModel';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class EditTalkerUseCase {
  iTalkerRepository: ITalkerRepository;
  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  execute(talker: TalkerModel): Promise<TalkerModel> {
    const talkerEdited = this.iTalkerRepository.editTalker(talker);
    return talkerEdited;
  }
}

export { EditTalkerUseCase };

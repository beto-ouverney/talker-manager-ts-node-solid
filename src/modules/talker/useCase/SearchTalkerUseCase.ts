import { TalkerModel } from '../model/TalkerModel';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class SearchTalkerUseCase {
  iTalkerRepository: ITalkerRepository;
  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  async execute(search: string): Promise<TalkerModel[]> {
    const result = await this.iTalkerRepository.searchTalker(search);
    return result;
  }
}

export { SearchTalkerUseCase };

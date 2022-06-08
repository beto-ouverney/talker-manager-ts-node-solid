import { Talker } from '../entities/Talker';
import { ITalkerRepository } from '../repositories/ITalkerRepository';

class SearchTalkerUseCase {
  iTalkerRepository: ITalkerRepository;
  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  async execute(search: string): Promise<Talker[]> {
    const result = await this.iTalkerRepository.searchTalker(search);
    return result;
  }
}

export { SearchTalkerUseCase };

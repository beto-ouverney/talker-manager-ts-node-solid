import { ITalkerRepository } from '../repositories/ITalkerRepository';

class DeleteTalkerUseCase {
  iTalkerRepository: ITalkerRepository;
  constructor(iTalkerRepository: ITalkerRepository) {
    this.iTalkerRepository = iTalkerRepository;
  }

  async execute(id: number): Promise<number> {
    const result = await this.iTalkerRepository.deleteTalker(id);
    return result;
  }
}

export { DeleteTalkerUseCase };

import { TalkerModel } from '../model/TalkerModel';
import data from '../../../../talker.json';
import { ITalkerRepository } from './ITalkerRepository';
import fs from 'fs/promises';

class TalkerRepository implements ITalkerRepository {
  private static INSTANCE: TalkerRepository;

  public static getInstance() {
    if (!TalkerRepository.INSTANCE) {
      TalkerRepository.INSTANCE = new TalkerRepository();
    }
    return TalkerRepository.INSTANCE;
  }

  async getFromData() {
    try {
      const data = await fs.readFile('./talker.json', 'utf-8');
      const talkers = JSON.parse(data);
      return talkers;
    } catch (e) {
      return [];
    }
  }

  async getTalker(id: number): Promise<TalkerModel> {
    const talkers = await this.getFromData();
    const talker = talkers.find((e: TalkerModel) => e.id === id);
    return talker;
  }

  getAllTalkers(): Promise<TalkerModel[]> {
    return this.getFromData();
  }
}

export { TalkerRepository };

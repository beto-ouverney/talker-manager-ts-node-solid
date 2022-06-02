import { TalkerModel } from '../model/TalkerModel';
import data from '../../../../talker.json';
import { ITalkerRepository } from './ITalkerRepository';
import fs from 'fs/promises';

class TalkerRepository implements ITalkerRepository {
  private static INSTANCE: TalkerRepository;

  public static getInstance(): TalkerRepository {
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

  getAllTalkers(): Promise<TalkerModel[]> {
    return this.getFromData();
  }
}

export { TalkerRepository };

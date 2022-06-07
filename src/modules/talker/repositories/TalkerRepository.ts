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

  async createTalker(talker: TalkerModel): Promise<TalkerModel> {
    const data = await this.getFromData();
    const talkers = data.sort((a: TalkerModel, b: TalkerModel) => a.id - b.id);
    const { id } = talkers[talkers.length - 1];
    talker.id = id + 1;
    talkers.push(talker);
    const talkersToWfrite = JSON.stringify(talkers);
    await fs.writeFile('./talker.json', talkersToWfrite, 'utf-8');
    return talker;
  }

  async editTalker(talker: TalkerModel): Promise<TalkerModel> {
    const data = await this.getFromData();
    const talkers = data.filter((e: TalkerModel) => e.id !== talker.id);
    talkers.push(talker);
    const talkersToWfrite = JSON.stringify(talkers);
    await fs.writeFile('./talker.json', talkersToWfrite, 'utf-8');
    return talker;
  }

  async deleteTalker(id: number) {
    const data = await this.getFromData();
    const talkers = data.filter((e: TalkerModel) => e.id !== id);
    const talkersToWfrite = JSON.stringify(talkers);
    await fs.writeFile('./talker.json', talkersToWfrite, 'utf-8');
    return 204;
  }
}

export { TalkerRepository };

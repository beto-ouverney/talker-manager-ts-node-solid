import { writeJson } from '../../../helpers';
import { Talker } from '../entities/Talker';
import { ITalkerRepository } from './ITalkerRepository';
import * as helper from '../../../helpers/index';

class TalkerRepository implements ITalkerRepository {
  private static INSTANCE: TalkerRepository;

  public static getInstance() {
    if (!TalkerRepository.INSTANCE) {
      TalkerRepository.INSTANCE = new TalkerRepository();
    }
    return TalkerRepository.INSTANCE;
  }

  async getTalker(id: number): Promise<Talker> {
    const talkers = await helper.readJson();
    const talker = talkers.find((e: Talker) => e.id === id);
    return talker;
  }

  async getAllTalkers(): Promise<Talker[]> {
    return await helper.readJson();
  }

  async createTalker(talker: Talker): Promise<Talker> {
    const data = await helper.readJson();
    const talkers = data.sort((a: Talker, b: Talker) => a.id - b.id);
    const { id } = talkers[talkers.length - 1];
    talker.id = id + 1;
    talkers.push(talker);
    writeJson(talkers);
    return talker;
  }

  async editTalker(talker: Talker): Promise<Talker> {
    const data = await helper.readJson();
    const talkers = data.filter((e: Talker) => e.id !== talker.id);
    talkers.push(talker);
    writeJson(talkers);
    return talker;
  }

  async deleteTalker(id: number) {
    const data = await helper.readJson();
    const talkers = data.filter((e: Talker) => e.id !== id);
    writeJson(talkers);
    return 204;
  }

  async searchTalker(search: string): Promise<Talker[]> {
    const data = await helper.readJson();
    const talkers = data.filter((e: Talker) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
    return talkers;
  }
}

export { TalkerRepository };

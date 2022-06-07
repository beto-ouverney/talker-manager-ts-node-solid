import { TalkerModel } from '../model/TalkerModel';
import { TalkerRepository } from './TalkerRepository';

interface ITalkerRepository {
  getAllTalkers(): Promise<TalkerModel[]>;
  getTalker(id: number): Promise<TalkerModel>;
  createTalker(talker: TalkerModel): Promise<TalkerModel>;
  editTalker(talker: TalkerModel): Promise<TalkerModel>;
  deleteTalker(id: number): Promise<number>;
}

export { ITalkerRepository };

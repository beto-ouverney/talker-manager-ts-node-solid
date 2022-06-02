import { TalkerModel } from '../model/TalkerModel';
import { TalkerRepository } from './TalkerRepository';

interface ITalkerRepository {
  getAllTalkers(): Promise<TalkerModel[]>;
  getTalker(id: number): Promise<TalkerModel>;
}

export { ITalkerRepository };

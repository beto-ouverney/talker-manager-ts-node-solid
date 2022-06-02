import { TalkerModel } from '../model/TalkerModel';

interface ITalkerRepository {
  getAllTalkers(): Promise<TalkerModel[]>;
}

export { ITalkerRepository };

import { Talker } from '../entities/Talker';
import { TalkerRepository } from './TalkerRepository';

interface ITalkerRepository {
  getAllTalkers(): Promise<Talker[]>;
  getTalker(id: number): Promise<Talker>;
  createTalker(talker: Talker): Promise<Talker>;
  editTalker(talker: Talker): Promise<Talker>;
  deleteTalker(id: number): Promise<number>;
  searchTalker(search: string): Promise<Talker[]>;
}

export { ITalkerRepository };

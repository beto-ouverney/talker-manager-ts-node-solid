import fs from 'fs/promises';
import { Talker } from '../modules/talker/entities/Talker';

async function writeJson(talkers: Talker[]) {
  try {
    const talkersToWfrite = JSON.stringify(talkers);
    await fs.writeFile('./talker.json', talkersToWfrite, 'utf-8');
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
}

export { writeJson };

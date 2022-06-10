import fs from 'fs/promises';

async function readJson() {
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const talkers = JSON.parse(data);
    return talkers;
  } catch (err) {
    if(err instanceof Error){
      throw new Error(err.message);
    }
  }
}

export { readJson };

import fs from 'fs/promises';

class TalkerModel {
  name: string;
  age: number;
  id: number;
  talk: TalkModel;

  constructor(name: string, age: number, id: number, talk: TalkModel) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.talk = talk;
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
}

export { TalkerModel };

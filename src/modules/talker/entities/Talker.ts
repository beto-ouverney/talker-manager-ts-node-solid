import fs from 'fs/promises';
import { Talk } from './Talk';

class Talker {
  name: string;
  age: number;
  id: number;
  talk: Talk;

  constructor(name: string, age: number, id: number, talk: Talk) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.talk = talk;
  }
}

export { Talker };

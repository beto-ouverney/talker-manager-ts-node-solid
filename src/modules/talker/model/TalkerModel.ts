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
}

export { TalkerModel };

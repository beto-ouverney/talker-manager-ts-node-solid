import { error } from '../../../data/error';
import { TalkerModel } from '../model/TalkerModel';

class TalkerValidations {
  talker: TalkerModel;

  constructor(talker: TalkerModel) {
    this.talker = talker;
  }

  validateTalker() {
    if (!this.talker.name || this.talker.name === '') {
      return error.nameIsRequired;
    }
    if (this.talker.name.length < 3) {
      return error.invalidName;
    }
    if (!this.talker.age) {
      return error.ageIsRequired;
    }
    if (this.talker.age < 18) {
      return error.invalidAge;
    }
    if (
      !this.talker.talk ||
      !this.talker.talk.watchedAt ||
      !this.talker.talk.rate
    ) {
      return error.talkIsRequired;
    }

    const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    const date = this.talker.talk.watchedAt.toString();
    if (!date.match(dateFormat)) {
      return error.invalidWathedAt;
    }
    if (this.talker.talk.rate < 1 || this.talker.talk.rate > 5) {
      return error.invalidRate;
    }
  }
}

export { TalkerValidations };

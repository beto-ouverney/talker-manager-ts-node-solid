import { error } from '../../../data/error';
import { Talker } from '../entities/Talker';

class TalkerValidations {
  talker: Talker;

  constructor(talker: Talker) {
    this.talker = talker;
  }

  checkEmptyValues() {
    if (!this.talker.name || this.talker.name === '') {
      return error.nameIsRequired;
    }
    if (!this.talker.age) {
      return error.ageIsRequired;
    }
    if (!this.talker.talk) {
      return error.talkIsRequired;
    }
    const { watchedAt, rate } = this.talker.talk;
    if (!watchedAt || rate === undefined) {
      console.log(rate);
      return error.talkIsRequired;
    }
  }

  validateTalker() {
    const errorEmptyValues = this.checkEmptyValues();
    if (errorEmptyValues) {
      return errorEmptyValues;
    }
    if (this.talker.name.length < 3) {
      return error.invalidName;
    }

    if (this.talker.age < 18) {
      return error.invalidAge;
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

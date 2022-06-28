import { Request, Response, NextFunction } from 'express';
import { error } from '../../../schema/error';
import { Talk } from '../entities/Talk';

function checkEmptyValues(name: string, age: number, talk: Talk) {
  if (!name || name === '') {
    return error.nameIsRequired;
  }
  if (!age) {
    return error.ageIsRequired;
  }
  if (!talk) {
    return error.talkIsRequired;
  }
  const { watchedAt, rate } = talk;
  if (!watchedAt) {
    return error.watchedAtIsRequired;
  }
  if (rate === undefined) {
    console.log(rate);
    return error.rateIsRequired;
  }
}

function talkerValidations(req: Request, res: Response, next: NextFunction) {
  const {
    body: { name, age, talk },
  } = req;
  const ageNumber = Number(age);
  const errorEmptyValues = checkEmptyValues(name, ageNumber, talk);
  if (errorEmptyValues) {
    return res
      .status(errorEmptyValues.status)
      .json({ message: errorEmptyValues.message });
  }
  if (name.length < 3) {
    return res
      .status(error.invalidName.status)
      .json({ message: error.invalidName.message });
  }

  if (ageNumber < 18) {
    return res
      .status(error.invalidAge.status)
      .json({ message: error.invalidAge.message });
  }

  const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  const date = talk.watchedAt.toString();
  if (!date.match(dateFormat)) {
    return res
      .status(error.invalidWathedAt.status)
      .json({ message: error.invalidWathedAt.message });
  }
  if (talk.rate < 1 || talk.rate > 5) {
    console.log(error.invalidRate.message);
    return res
      .status(error.invalidRate.status)
      .json({ message: error.invalidRate.message });
  }

  return next();
}

export { talkerValidations };

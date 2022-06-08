import { Request, Response, NextFunction } from 'express';
import { error } from '../../../schema/error';

function userValidation(req: Request, res: Response, next: NextFunction) {
  const {
    body: { email, password },
  } = req;
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  if (!email || email === '') {
    return res
      .status(error.emailIsRequired.status)
      .json({ message: error.emailIsRequired.message });
  }
  if (!regex.test(email)) {
    return res
      .status(error.invalidEmail.status)
      .json({ message: error.invalidEmail.message });
  }
  if (!password || password === '') {
    return res
      .status(error.passwordIsRequired.status)
      .json({ message: error.passwordIsRequired.message });
  }
  if (password.length < 6) {
    return res
      .status(error.invalidPassword.status)
      .json({ message: error.invalidPassword.message });
  }
  return next();
}

export { userValidation };

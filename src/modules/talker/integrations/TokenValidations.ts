import { error } from '../../../data/error';

class TokenValidations {
  constructor() {}
  validationToken(token: string | undefined) {
    try {
      if (!token) {
        return error.tokenNotFound;
      }

      const regex = /[\da-fA-F]{16}/g;
      if (!regex.test(token)) {
        return error.invalidToken;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export { TokenValidations };

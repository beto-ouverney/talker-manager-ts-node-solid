import { error } from '../../../data/error';
import { UserModel } from '../model/UserModel';

class UserValidations {
  user: UserModel;
  constructor(user: UserModel) {
    this.user = user;
  }

  getValidations() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!this.user.email || this.user.email === '') {
      return error.emailIsRequired;
    }
    if (!regex.test(this.user.email)) {
      return error.invalidEmail;
    }

    if (!this.user.password || this.user.password === '') {
      return error.passwordIsRequired;
    }
    if (this.user.password.length < 6) {
      return error.invalidPassword;
    }
  }
}

export { UserValidations };

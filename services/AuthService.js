// import request from 'request';
import bluebird from 'bluebird';
import {LOGIN_URL, SIGNUP_URL} from '../constants/AppConstants';

class AuthService {

  login(email, password) {
    return new bluebird( (resolve, reject) => {
      $.post('http://dgzn.io/v1/users/auth', {
        email: email
      , password: password
      })
      .done(function(data) {
        console.log("returning", data);
        return resolve(data)
      })
      .fail(function(err) {
        return reject(err.statusText)
      });
    });
  }

  signup(user) {
    return new bluebird( (resolve, reject) => {
      $.post('http://dgzn.io/v1/users', user)
      .done(function(data) {
        return resolve(data)
      })
      .fail(function(err) {
        return reject(err.statusText)
      });
    });
  }

}

export default new AuthService();

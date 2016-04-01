// import request from 'request';
import bluebird from 'bluebird';
import {LOGIN_URL, SIGNUP_URL} from '../constants/AppConstants';

class AuthService {

  login(email, password) {
    return new bluebird( (resolve, reject) => {
      $.post('http://dgzn.io:8080/v1/users/auth', {
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

  signup(email, password, extra) {
    return new bluebird( (resolve, reject) => {
      request.post(
        {
          url: SIGNUP_URL,
          body: {email, password, extra},
          json: true
        },
        (err, response, body) => {
          if(err){
            return reject(err);
          }
          if(response.statusCode >= 400){
            return reject(body);
          }
          return resolve(body);
        }
      );
    });
  }

}

export default new AuthService();

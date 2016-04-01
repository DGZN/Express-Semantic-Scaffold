import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._user = null;
    this._error = null;
    this._jwt = null;

    //attempt auto-login
    console.log('&*&*&*& attempting auto-login in LoginStore');
    this._autoLogin();
  }

  _registerToActions(action) {
    switch(action.type) {

      case ActionTypes.REQUEST_LOGIN_USER_SUCCESS:
        this._jwt = action.body.token;
        localStorage.setItem("jv_jwt", this._jwt);
        localStorage.setItem("user", JSON.stringify(action.body.user));
        //this._user = jwt_decode(this._jwt);
        this._user = action.body.user
        console.log("setting user to", action.body.user);
        this._error = null;
        this.emitChange();
        break;

      case ActionTypes.REQUEST_LOGIN_USER_ERROR:
        this._error = action.error;
        this.emitChange();
        break;

      case ActionTypes.LOGOUT_USER:
        this._user = null;
        this._error = null;
        this._jwt = null;
        localStorage.setItem("jv_jwt", "");
        this.emitChange();
        break;

      default:
        break;
    };
  }

  _autoLogin () {
    let jwt = localStorage.getItem("jv_jwt");
    let user = localStorage.getItem("user");
    if (jwt) {
      this._jwt = jwt;
      //this._user = jwt_decode(this._jwt);
      this._user = JSON.parse(user);
      console.log("&*&*&* autologin success")
    }
  }

  get user() {
    return this._user;
  }

  get error() {
    return this._error;
  }

  get jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();

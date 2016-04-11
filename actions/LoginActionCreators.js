import { dispatch, dispatchAsync } from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import AuthService from '../services/AuthService';

export default {
  loginUser: (email, password) => {
    let promise = AuthService.login(email, password);
    dispatchAsync(promise, {
      request: ActionTypes.REQUEST_LOGIN_USER,
      success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
      failure: ActionTypes.REQUEST_LOGIN_USER_ERROR
    }, { email, password });
  },

  signup: (user) => {
    let promise = AuthService.signup(user);
    console.log("signing up user", user);
    dispatchAsync(promise, {
      request: ActionTypes.REQUEST_LOGIN_USER,
      success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
      failure: ActionTypes.REQUEST_LOGIN_USER_ERROR
    }, { user });
  },

  logoutUser: () => {
    dispatch(ActionTypes.LOGOUT_USER);
  }
}

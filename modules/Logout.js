import React       from 'react'
import { browserHistory } from 'react-router'

const env = require('./env.js')

export default React.createClass({
  getInitialState() {
    return {
      user: {}
    }
  },
  render() {
    $('.my-account.modal').modal('hide');
    this.clearAuthToken()
    return (
      <div></div>
    );
  },

  clearAuthToken() {
    localStorage.setItem('melody::authToken', '');
    browserHistory.push('/')
  }

});

import React       from 'react'
import { browserHistory } from 'react-router'

import LoginActionCreators from '../actions/LoginActionCreators';

export default React.createClass({
  render() {
    $('.my-account.modal').modal('hide', function(){
      //browserHistory.push('/')
    });
    return (<div></div>)
  },
  componentWillUnmount(){
    LoginActionCreators.logoutUser();
  }
});

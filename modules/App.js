import React       from 'react'
import { browserHistory } from 'react-router'


import Nav         from './Nav'
import Footer      from './Footer'
import MyWatchlist from './MyWatchlist'

import LoginStore from '../stores/LoginStore';
import LoginActionCreators from '../actions/LoginActionCreators';


const env = require('./env.js')

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete(),
    language: 'en'
  };
}


export default React.createClass({
  setLanguage(lang) {
    this.setState({
      language: lang
    })
  },
  _getLoginState() {
    return {
      user: LoginStore.user
    , userLoggedIn: LoginStore.isLoggedIn()
    };
  },
  getInitialState() {
    return this._getLoginState()
  },

  componentDidMount: function() {

    this.changeListener = this._onLoginChange;
    LoginStore.addChangeListener(this.changeListener);
  },

  /*
    This event handler deals with all code-initiated routing transitions
    when logging in or logging out
  */
  _onLoginChange() {
    //get a local up-to-date record of the logged-in state
    //see https://facebook.github.io/react/docs/component-api.html
    let userLoggedInState = this._getLoginState();
    this.setState(userLoggedInState);

    //get any nextTransitionPath - NB it can only be got once then it self-nullifies
    let transitionPath = '/';
    browserHistory.push('/')

    //trigger router change
    console.log("&*&*&* App onLoginChange event: loggedIn=", userLoggedInState.userLoggedIn,
      "nextTransitionPath=", transitionPath);

    if(userLoggedInState.userLoggedIn){
      console.log("user is logged in");
      //router.transitionTo(transitionPath);
    }else{
      console.log("user is not logged in");
      //router.transitionTo('/login');
    }
  },

  componentWillUnmount: function() {
    //TodoStore.removeChangeListener(this._onChange);
    LoginStore.removeChangeListener(this.changeListener);
  },

  render() {
    return (
      <div>
        <MyWatchlist />
        <Nav
          user={this.state.user}
          setLanguage={this.setLanguage}
          language={this.state.language}  />
        {this.props.children && React.cloneElement(this.props.children,{
          language: this.state.language
        , isLoggedIn: this.state.userLoggedIn
        , user: this.state.user
        })}
        <Footer />
      </div>
    );
  },

  logout(e) {
    e.preventDefault();
    LoginActionCreators.logoutUser();
  },



  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  },

});

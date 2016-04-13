import React       from 'react'
import { browserHistory } from 'react-router'
import appHistory from '../app_history'

import Nav         from './Nav'
import Footer      from './Footer'
import MyWatchlist from './MyWatchlist'

import LoginStore from '../stores/LoginStore';
import LoginActionCreators from '../actions/LoginActionCreators';


const env = require('./env.js')

export default React.createClass({
  setLanguage(lang, align) {
    this.setState({
      align: align
    , language: lang
    })
  },
  _getLoginState() {
    return {
      language: 'en'
    , align: 'left'
    , user: LoginStore.user
    , userLoggedIn: LoginStore.isLoggedIn()
    };
  },
  getInitialState() {
    return this._getLoginState()
  },

  componentDidMount: function() {
    this.changeListener = this._onLoginChange;
    LoginStore.addChangeListener(this.changeListener);
    browserHistory.push('/')
  },

  /*
    This event handler deals with all code-initiated routing transitions
    when logging in or logging out
  */
  _onLoginChange() {
    //get a local up-to-date record of the logged-in state
    //see https://facebook.github.io/react/docs/component-api.html
    let userLoggedInState = this._getLoginState();
    $('.my-account.modal').modal('hide', function(){
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
    }.bind(this));

  },

  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this.changeListener);
  },

  render() {

    return (
      <div style={{ 'textAlign': this.state.align + ' !important'}}>
        <MyWatchlist user={this.state.user} language={this.state.language} textAlign={this.state.align} {...this.props} linkFromModal={this.linkFromModal} />
        <Nav
          user={this.state.user}
          myAccount={this.myAccount}
          register={this.register}
          closeModal={this.closeModal}
          setLanguage={this.setLanguage}
          language={this.state.language}  />
        {this.props.children && React.cloneElement(this.props.children,{
          language: this.state.language
        , textAlign: this.state.align
        , myAccount: this.myAccount
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

  myAccount() {
    if (this.state.user && this.state.user.id) {
      $('#signin-form').hide()
      $('#registraion-form').hide()
      $('#profile-form').show()
    } else {
      $('#profile-form').hide()
      $('#signin-form').show()
      $('#registraion-form').hide()
    }
    setTimeout(function(){
      $('.my-account.modal').modal({ closable: false}).modal('show');
      $('.account-settings').on('click', function(e){
        if ($(e.target).data('link')) {
          switch ($(e.target).data('link')) {
            case 'logout':
              LoginActionCreators.logoutUser();
              break;
            default:
              console.log("something else was clicked")
          }
        }
      })
      $('#signin').off()
      $('#signin').on('submit', function( event ) {
        event.preventDefault();
        var email = $('#email').val()
        var password = $('#password').val()
        LoginActionCreators.loginUser(email, password);
      });
    },200)
  },

  register(data) {
    var user = {}
    data.map((prop) => {
      user[prop.name] = prop.value
    })
    LoginActionCreators.signup(user);
  },

  closeModal() {
    $('.my-account.modal').modal('hide', function(){
      console.log("modal closed")
    })
  },

  linkFromModal(link) {
    console.log("linking from modal", link)
    if (link) {
      $('.my-watchlist.modal').modal('hide', function(){
        let transitionPath = '/movies/2';
        //browserHistory.push('/movies/2')
        setTimeout(function(){
          appHistory.replace('/movies/2')
        }, 500)
      })
    }
  }

});

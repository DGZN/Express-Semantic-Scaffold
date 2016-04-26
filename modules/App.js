import React       from 'react'
import { browserHistory } from 'react-router'
import appHistory from '../app_history'

import Nav         from './Nav'
import Footer      from './Footer'
import MyWatchlist from './MyWatchlist'

import { Link } from 'react-router'

import LoginStore from '../stores/LoginStore';
import LoginActionCreators from '../actions/LoginActionCreators';


const env = require('./env.js')
const localized = require('./localized.js')

export default React.createClass({
  setLanguage(lang, align) {
    this.setState({
      align: align
    , local: this.localized(localized, 'ar')
    , language: lang
    })
  },
  _getLoginState() {
    return {
      page: 0
    , language: 'ar'
    , local: this.localized(localized, 'ar')
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
    browserHistory.replace('/')
    var self = this;
    $(window).off('scroll')
    $(window).on('scroll', function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        var page = self.state.page
        var top = document.body.scrollTop
        if (top < 1)
          top = document.documentElement.scrollTop;
        console.log("current top", top)
        if (top > 21300 && page < 22) {
          return self.setState({
            page: 22
          })
        }
        if (top > 20300 && page < 24) {
          return self.setState({
            page: 24
          })
        }
        if (top > 19300 && page < 23) {
          return self.setState({
            page: 23
          })
        }
        if (top > 19300 && page < 22) {
          return self.setState({
            page: 22
          })
        }
        if (top > 18300 && page < 21) {
          return self.setState({
            page: 21
          })
        }
        if (top > 17300 && page < 20) {
          return self.setState({
            page: 20
          })
        }
        if (top > 16300 && page < 19) {
          return self.setState({
            page: 19
          })
        }
        if (top > 15300 && page < 18) {
          return self.setState({
            page: 18
          })
        }
        if (top > 14300 && page < 17) {
          return self.setState({
            page: 17
          })
        }
        if (top > 13200 && page < 16) {
          return self.setState({
            page: 16
          })
        }
        if (top > 12300 && page < 15) {
          return self.setState({
            page: 15
          })
        }
        if (top > 11300 && page < 14) {
          return self.setState({
            page: 14
          })
        }
        if (top > 10000 && page < 13) {
          return self.setState({
            page: 13
          })
        }
        if (top > 9300 && page < 12) {
          return self.setState({
            page: 12
          })
        }
        if (top > 8000 && page < 11) {
          return self.setState({
            page: 11
          })
        }
        if (top > 7000 && page < 10) {
          return self.setState({
            page: 10
          })
        }
        if (top > 6100 && page < 9) {
          return self.setState({
            page: 9
          })
        }
        if (top > 5200 && page < 8) {
          return self.setState({
            page: 8
          })
        }
        if (top > 4300 && page < 7) {
          return self.setState({
            page: 7
          })
        }
        if (top > 3400 && page < 6) {
          return self.setState({
            page: 6
          })
        }
        if (top > 2500 && page < 5) {
          return self.setState({
            page: 5
          })
        }
        if (top > 1700 && page < 4) {
          return self.setState({
            page: 4
          })
        }
        if (top > 900 && page < 3) {
          return self.setState({
            page: 3
          })
        }
        if (top > 200 && page < 2) {
          return self.setState({
            page: 2
          })
        }
        if (top > 150 && page < 1) {
          return self.setState({
            page: 1
          })
        }
      }
    })
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
    $('.watchlist.item.left.aligned').hide()
    var local = this.localized(localized, this.state.language)
    return (
      <div style={{ 'textAlign': this.state.align + ' !important'}}>
        <Nav
          user={this.state.user}
          myAccount={this.myAccount}
          register={this.register}
          closeModal={this.closeModal}
          setLanguage={this.setLanguage}
          local={local}
          language={this.state.language}  />
        {this.props.children && React.cloneElement(this.props.children,{
          page: this.state.page
        , language: this.state.language
        , local: local
        , textAlign: this.state.align
        , myAccount: this.myAccount
        , isLoggedIn: this.state.userLoggedIn
        , user: this.state.user
        })}
        <Footer local={local} />
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
    })
  },

  linkFromModal(link) {
    if (link) {
      $('.my-watchlist.modal').modal('hide', function(){
        let transitionPath = '/movies/2';
        //browserHistory.push('/movies/2')
        setTimeout(function(){
          appHistory.replace('/movies/2')
        }, 500)
      })
    }
  },

  localized(text, language) {
    var meta = {}
    for (var key in text) {
      meta[key] = text[key][language]
    }
    return meta;
  }

});

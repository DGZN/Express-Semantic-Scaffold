import React from 'react'
import { Link } from 'react-router'

const env = require('./env.js')

export default React.createClass({

  getInitialState(){
    return {
      user: {}
    }
  },

  componentWillReceiveProps(props){
    if (props.user && props.user.id)
      this.setState({
        user: props.user
      })
  },

  render() {
    var self = this;
    setTimeout(function() {
      $('#register').off()
      $('#register').on('submit', function( event ) {
        event.preventDefault();
        var user = $( this ).serialize();
        self.newAccount(user)
      });
      $('#signin').off()
      $('#signin').on('submit', function( event ) {
        event.preventDefault();
        var user = $( this ).serialize();
        self.loginUser(user)
      });
    },500)
    var MODAL = this.login()
    if (env.authenticated()) {
      MODAL = this.myAccount(this.state.user)
    }
    return (
      <div className="my-account modal">
        <div className="ui grid">
          {MODAL}
        </div>
      </div>
    );
  },

  myAccount(user) {
    return (
      <div className="two column row account-settings">
        <div className="twelve wide column">
          <h3>Profile</h3>
          <div className="ui grid">
            <div className="ui two column row">
              <div className="three wide column">
                <div className="ui text">First Name</div>
              </div>
              <div className="three wide column">
                <div className="ui text">Last Name</div>
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide column">
                <div className="ui text">{user.first_name}</div>
              </div>
              <div className="three wide column">
                <div className="ui text">{user.last_name}</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">Email Address</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">{user.email}</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">Password</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">*******</div>
              </div>
            </div>
          </div>
        </div>
        <div className="four wide column">
          <a href="#">
            <h4>Profile</h4>
          </a>
          <a href="#">
            <h4>Notifications</h4>
          </a>
          <a href="#">
            <h4>Settings</h4>
          </a>
          <Link to="/sign-out" className="item">
            <h4>Sign Out</h4>
          </Link>
        </div>
      </div>
    )
  },

  login() {
    return (
      <div className="two column row account-settings">
        <div className="twelve wide column">
          <h3>Sign In</h3>
          <form name="signin" id="signin" method="post">
            <div className="ui grid">
              <div className="ui one column row">
                <div className="three wide computer eight wide tablet column">
                  <div className="ui label">Email Address</div>
                  <input className="ui massive input" type="text" name="email" />
                </div>
              </div>
              <div className="ui two column row">
                <div className="three wide column">
                  <div className="ui label">Password</div>
                  <input className="ui massive input" type="password" name="password" />
                </div>
              </div>
              <div className="ui one column row">
                <div className="three wide column">
                <a>
                  <button className="ui sign-in button" text="Sign In" title="Sign In"   >
                    Sign In
                  </button>
                </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="four wide column">
          <a href="#">
            <h4>Profile</h4>
          </a>
          <a href="#">
            <h4>Notifications</h4>
          </a>
          <a href="#">
            <h4>Settings</h4>
          </a>
          <Link to="/sign-out" className="item">
            <h4>Sign Out</h4>
          </Link>
        </div>
      </div>
    )
  },

  register() {
    return (
      <div className="two column row account-settings">
        <div className="twelve wide column">
          <h3>Register</h3>
          <form name="register" id="register" method="post">
            <div className="ui grid">
              <div className="ui one column row">
                <div className="three wide computer eight wide tablet column">
                  <div className="ui label">Email Address</div>
                  <input className="ui massive input" type="text" name="email" />
                </div>
              </div>
              <div className="ui two column row">
                <div className="three wide column">
                  <div className="ui label">First Name</div>
                  <input className="ui massive input"  type="text" name="first_name" />
                </div>
                <div className="three wide column">
                  <div className="ui label">Last Name</div>
                  <input className="ui massive input"  type="text" name="last_name" />
                </div>
              </div>
              <div className="ui two column row">
                <div className="three wide column">
                  <div className="ui label">Password</div>
                  <input className="ui massive input" type="password" name="password" />
                </div>
                <div className="three wide column">
                  <div className="ui label">Confirm Password</div>
                  <input className="ui massive input" type="password" name="password_confirmation" />
                </div>
              </div>
              <div className="ui one column row">
                <div className="six wide column">
                <a>
                  <button className="ui register button" text="Register" title="Register"   >
                    Register
                  </button>
                </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="four wide column"><a href="#">
            <h4>Profile</h4></a><a href="#">
            <h4>Notifications</h4></a><a href="#">
            <h4>Settings</h4></a><a href="#">
            <h4>Sign Out</h4></a></div>
      </div>
    )
  },

  newAccount(user) {
    $.post(env.endpoint + '/v1/users', user, function (res) {
      if (res.errors) {
        console.log("Registstrion errors", res.errors)
      }
      if (res.status && res.status == true && res.user) {
        $('.my-account.modal').modal('hide');
        this.props.setUser(res.user)
      }
    }.bind(this));
  },

  loginUser(user) {
    $.post(env.endpoint + '/v1/users/auth', user, function (res) {
      if (res.errors) {
        console.log("Login errors", res.errors)
      }
      if (res.status && res.status == true && res.token) {
        $('.my-account.modal').modal('hide');
        this.setAuthToken(res.token, res.authenticated)
      }
    }.bind(this));
  },

  setAuthToken(token, user) {
    if (token.length) {
      localStorage.setItem('melody::authToken', token)
      this.props.setUser(user)
    }
  }

})

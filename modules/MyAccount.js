import React from 'react'
import { Link } from 'react-router'
import Profile from './Profile'
import Login from './Login'
import LoginStore from '../stores/LoginStore';

const env = require('./env.js')

export default React.createClass({

  getInitialState(){
    return {
      email: ''
    , password: ''
    , user: this.props.user || {
      "first_name": ''
    , "last_name": ''
    , "email": ''
    }
    }
  },

  componentDidMount() {
    var self = this;
    if (this.props.user && this.props.user.id) {
      $('#signin-form').hide()
      $('#registraion-form').hide()
      $('#profile-form').show()
    } else {
      $('#profile-form').hide()
      $('#signin-form').show()
      $('#registraion-form').hide()
    }
    $('.ui.sign-up.button').on('click', function(e){
      e.preventDefault()
      $('#signin-form').hide(100)
      $('#registraion-form').show(200)
      $('#signup').off()
      $('#signup').on('submit', function( event ) {
        event.preventDefault();
        var first_name = $('#first_name').val()
        var last_name = $('#last_name').val()
        var email = $('#email').val()
        var password = $('#password').val()
        var password_confirmation = $('#password').val()
        self.props.register($('#signup').serializeArray())
      });
    })
  },

  render() {
    return (
      <div className="my-account modal">
        <div className="ui grid">
          <div  id="signin-form" className="two column row account-settings ">
            <div className="twelve wide column">
              <h3>Sign In</h3>
              <form name="signin" id="signin" method="post" >
                <div className="ui grid">
                  <div className="ui one column row">
                    <div className="three wide computer eight wide tablet column">
                      <div className="ui label">Email Address</div>
                      <input className="ui massive input" type="text" name="email" id="email"  />
                    </div>
                  </div>
                  <div className="ui two column row">
                    <div className="three wide column">
                      <div className="ui label">Password</div>
                      <input className="ui massive input" type="password" name="password" id="password" />
                    </div>
                  </div>
                  <div className="ui one column row">
                    <div className="three wide column">
                    <a>
                      <button className="ui sign-up button" text="Sign Up" title="Sign Up"  >
                        Sign Up
                      </button>
                    </a>
                    <a>
                      <button className="ui blue sign-in button" text="Sign In" title="Sign In"  >
                        Sign In
                      </button>
                    </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="profile-form" className="two column row account-settings ">
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
                    <div className="ui text">{this.state.user.first_name || ''}</div>
                  </div>
                  <div className="three wide column">
                    <div className="ui text">{this.state.user.last_name || ''}</div>
                  </div>
                </div>
                <div className="ui one column row">
                  <div className="three wide computer eight wide tablet column">
                    <div className="ui text">Email Address</div>
                  </div>
                </div>
                <div className="ui one column row">
                  <div className="three wide computer eight wide tablet column">
                    <div className="ui text">{this.state.user.email || ''}</div>
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
                <h4>Notifications</h4>
              </a>
              <a href="#">
                <h4>Settings</h4>
              </a>
              <a href="#">
                <h4 data-link="logout">Sign Out</h4>
              </a>
            </div>
          </div>
          <div id="registraion-form" className="two column row account-settings">
            <div className="twelve wide column">
              <h3>Register</h3>
              <form name="signup" id="signup" method="post" >
                <div className="ui grid">
                  <div className="ui two column row">
                    <div className="three wide computer five wide tablet column">
                      <div className="ui label">First Name</div>
                      <input className="ui massive input" type="text" name="first_name" id="first_name"  />
                    </div>
                    <div className="three wide computer five wide tablet column">
                      <div className="ui label">Last Name</div>
                      <input className="ui massive input" type="text" name="last_name" id="last_name"  />
                    </div>
                  </div>
                  <div className="ui one column row">
                    <div className="six wide computer eight wide tablet column">
                      <div className="ui label">Email Address</div>
                      <input className="ui massive input" type="text" name="email" id="email"  />
                    </div>
                  </div>
                  <div className="ui two column row">
                    <div className="three wide computer eight wide tablet column">
                      <div className="ui label">Password</div>
                      <input className="ui massive input" type="password" name="password" id="password"  />
                    </div>
                    <div className="three wide computer eight wide tablet column">
                      <div className="ui label">Password Confirmation</div>
                      <input className="ui massive input" type="password" name="password_confirmation" id="password_confirmation"  />
                    </div>
                  </div>
                  <div className="ui one column row">
                    <div className="six wide column">
                    <a>
                      <button className="ui sign-up-submit button" text="Sign Up" title="Sign Up"  >
                        Sign Up
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
        </div>
      </div>

    );
  },


})

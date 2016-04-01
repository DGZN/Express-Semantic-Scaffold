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
    , user: this.props.user
    }
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
                      <button className="ui sign-in button" text="Sign In" title="Sign In"  >
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
                    <div className="ui text"></div>
                  </div>
                  <div className="three wide column">
                    <div className="ui text"></div>
                  </div>
                </div>
                <div className="ui one column row">
                  <div className="three wide computer eight wide tablet column">
                    <div className="ui text">Email Address</div>
                  </div>
                </div>
                <div className="ui one column row">
                  <div className="three wide computer eight wide tablet column">
                    <div className="ui text"></div>
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
              <a href="#">
                <h4 data-link="logout">Sign Out</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  },


})

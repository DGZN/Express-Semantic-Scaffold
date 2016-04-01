import React       from 'react'
import { Link } from 'react-router'

import LoginActionCreators from '../actions/LoginActionCreators';

export default React.createClass({
  getInitialState() {
    return {
      user: this.props.user || {}
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.setState({author: '', text: ''});
  },
  componentWillUnmount() {
    $('#signin').off()
    $('.ui.massive.input').off()
  },
  render() {
    var self = this;
    var user = this.state.user
    setTimeout(function() {
      $('#signin').off()
      $('#signin').on('submit', function( event ) {
        event.preventDefault();
        LoginActionCreators.loginUser(self.state.email, self.state.password);
      });
      $('.ui.massive.input').off()
      $('.ui.massive.input').on('keydown', function(e) {
        var input = e.currentTarget;
        self.setState({
          [input.name]: input.value
        })
      })
    },500)
    return (
      <div className="two column row account-settings">
        <div className="twelve wide column">
          <h3>Sign In</h3>
          <form name="signin" id="signin" method="post" >
            <div className="ui grid">
              <div className="ui one column row">
                <div className="three wide computer eight wide tablet column">
                  <div className="ui label">Email Address</div>
                  <input className="ui massive input" type="text" name="email" id="email"  ></input>
                </div>
              </div>
              <div className="ui two column row">
                <div className="three wide column">
                  <div className="ui label">Password</div>
                  <input className="ui massive input" type="password" name="password" id="password" ></input>
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
  login(e) {
    e.preventDefault()
    console.log("submitted form from ", e);
  },

  setInput(e) {
    console.log("input form", e.currentTarget, e.currentTarget.value, e.currentTarget.name);
  },

  setlogin(e) {
    e.preventDefault();
    var user = $('#email').val()
    var password = $('#password').val()
    console.log("logging in", 'user', user, 'password', password);
    LoginActionCreators.loginUser(user, password);
  },
});

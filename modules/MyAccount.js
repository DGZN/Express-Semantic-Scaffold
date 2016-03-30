import React from 'react'

import { Link } from 'react-router'

export default React.createClass({
  render() {
    $('.ui.register.button').on('click', function(){
      console.log('I was clicked')
    })
    setTimeout(function(){
      $('#register').submit(function( event ) {
        console.log( $( this ).serialize() );
        event.preventDefault();
      });
    },500)
    return (
      <div className="my-account modal">
        <div className="ui grid">
          <div className="two column row account-settings">
            <div className="twelve wide column">
              <h3>Register</h3>
              <form name="register" id="register" method="post">
                <div className="ui grid">
                  <div className="ui one column row">
                    <div className="three wide computer eight wide tablet column">
                      <div className="ui label">Email Address</div>
                      <input className="ui massive input" type="text" name="emailAddress" />
                    </div>
                  </div>
                  <div className="ui two column row">
                    <div className="three wide column">
                      <div className="ui label">First Name</div>
                      <input className="ui massive input"  type="text" name="firstName" />
                    </div>
                    <div className="three wide column">
                      <div className="ui label">Last Name</div>
                      <input className="ui massive input"  type="text" name="lastName" />
                    </div>
                  </div>
                  <div className="ui two column row">
                    <div className="three wide column">
                      <div className="ui label">Password</div>
                      <input className="ui massive input" type="password" name="password" />
                    </div>
                    <div className="three wide column">
                      <div className="ui label">Confirm Password</div>
                      <input className="ui massive input" type="password" name="confirmPassword" />
                    </div>
                  </div>
                  <div className="ui one column row">
                    <div className="eight wide column">
                    <a onClick={this.myWatchlist}>
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
        </div>
      </div>
    );
  },
  myAccount() {
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
                <div className="ui text">Keiichi</div>
              </div>
              <div className="three wide column">
                <div className="ui text">Lindley</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">Email Address</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">keiichi.lindley@gmail.com</div>
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
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">ZIP Code</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">80110</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">Phone Number</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui text">###-###-####</div>
              </div>
            </div>
          </div>
        </div>
        <div className="four wide column"><a href="#">
            <h4>Profile</h4></a><a href="#">
            <h4>Notifications</h4></a><a href="#">
            <h4>Settings</h4></a><a href="#">
            <h4>Sign Out</h4></a></div>
      </div>
    )
  },

  register() {
    return (
      <div className="two column row account-settings">
        <div className="twelve wide column">
          <h3>Register</h3>
          <div className="ui grid">
            <div className="ui one column row">
              <div className="three wide computer eight wide tablet column">
                <div className="ui label">Email Address</div>
                <input className="ui massive input" type="text" name="emailAddress" />
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide column">
                <div className="ui label">First Name</div>
                <input className="ui massive input"  type="text" name="firstName" />
              </div>
              <div className="three wide column">
                <div className="ui label">Last Name</div>
                <input className="ui massive input"  type="text" name="lastName" />
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide column">
                <div className="ui label">Password</div>
                <input className="ui massive input" type="password" name="password" />
              </div>
              <div className="three wide column">
                <div className="ui label">Confirm Password</div>
                <input className="ui massive input" type="password" name="confirmPassword" />
              </div>
            </div>
            <div className="ui one column row">
              <div className="six wide column">
                <button className="ui register button" text="Register" title="Register"  >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="four wide column"><a href="#">
            <h4>Profile</h4></a><a href="#">
            <h4>Notifications</h4></a><a href="#">
            <h4>Settings</h4></a><a href="#">
            <h4>Sign Out</h4></a></div>
      </div>
    )
  },

  newAccount() {
    console.log("registering new account");
    var data = $('#register').serialize()
    console.log(data);
    console.log($('#register'));
  },
})

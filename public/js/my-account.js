const React = require('react');

const MyAccount = React.createClass({
  render() {
    var loggedIn = false;
    switch (loggedIn) {
      case true:
        var ACCOUNT = this.myAccount()
        break;
      default:
        var ACCOUNT = this.register()
    }
    return (
      <div className="my-account modal">
        <div className="ui grid">
          {ACCOUNT}
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
              <div className="three wide computer five wide tablet column">
                <div className="ui text">First Name</div>
              </div>
              <div className="three wide computer five wide tablet column">
                <div className="ui text">Last Name</div>
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide computer five wide tablet column">
                <div className="ui text">Keiichi</div>
              </div>
              <div className="three wide computer five wide tablet column">
                <div className="ui text">Lindley</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">Email Address</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">keiichi.lindley@gmail.com</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">Password</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">*******</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">ZIP Code</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">80110</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">Phone Number</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
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
              <div className="five wide computer eight wide tablet column">
                <div className="ui text">Email Address</div>
              </div>
            </div>
            <div className="ui one column row">
              <div className="five wide computer eight wide tablet column">
                <input className="ui massive input" type="text" name="emailAddress" />
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide computer five wide tablet column">
                <div className="ui text">First Name</div>
              </div>
              <div className="three wide computer five wide tablet column">
                <div className="ui text">Last Name</div>
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide computer five wide tablet column">
                <input className="ui massive input"  type="text" name="firstName" />
              </div>
              <div className="three wide computer five wide tablet column">
                <input className="ui massive input"  type="text" name="lastName" />
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide computer five wide tablet column">
                <div className="ui text">Password</div>
              </div>
              <div className="three wide computer five wide tablet column">
                <div className="ui text">Confirm Password</div>
              </div>
            </div>
            <div className="ui two column row">
              <div className="three wide computer five wide tablet column">
                <input className="ui massive input" type="password" name="password" />
              </div>
              <div className="three wide computer five wide tablet column">
                <input className="ui massive input" type="password" name="confirmPassword" />
              </div>
            </div>
            <div className="ui one column row">
              <div className="six wide computer five wide tablet column">
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
  }
});

module.exports = MyAccount;

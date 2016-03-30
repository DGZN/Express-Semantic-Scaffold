const React = require('react');

const MyAccount = React.createClass({
  render() {
    return (
      <div className="my-account modal">
        <div className="ui grid">
          <div className="two column row account-settings">
            <div className="twelve wide column">
              <h3>Register</h3>
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

                  </div>
                  <div className="three wide computer five wide tablet column">

                  </div>
                </div>
                <div className="ui one column row">
                  <div className="five wide computer eight wide tablet column">
                    <div className="ui text">Email Address</div>
                  </div>
                </div>
                <div className="ui one column row">
                  <div className="five wide computer eight wide tablet column">

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
                    <div className="ui text">Confirm Password</div>
                  </div>
                </div>
                <div className="ui one column row">
                  <div className="five wide computer eight wide tablet column">
                    <div className="ui text">*******</div>
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
        </div>
      </div>
    );
  }
});

module.exports = MyAccount;

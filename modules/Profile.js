import React       from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      user: this.props.user || {}
    }
  },
  render() {
    var user = this.state.user
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
  }
});

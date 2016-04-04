import React       from 'react'

export default React.createClass({
  render() {
    return (
      <div className="ui inverted vertical footer stackable center aligned segment">
        <div className="ui middle aligned six column centered stackable grid footer container">
          <div className="row">
            <div className="column middle aligned">
              <a className="link">
                <h4>FAQ/Help</h4>
              </a>
            </div>
            <div className="column middle aligned">
              <a className="link">
                <h4>Legal</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="ui middle aligned one column centered stackable grid container">
          <div className="ui image social-share">
            <img src="/images/social-share.png"/>
          </div>
        </div>
        <div className="ui middle aligned one column centered stackable grid container">
          <h6 className="tagline">© Melody Entertainment Group. All Rights Reserved. Lorem ipsum dolor sit amet, consectetur adipisicing elit</h6>
        </div>
      </div>
    );
  }
});

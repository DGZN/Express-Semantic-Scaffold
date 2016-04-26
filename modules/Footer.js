import React       from 'react'

export default React.createClass({
  render() {
    var local = this.props.local
    return (
      <div className="ui inverted vertical footer stackable center aligned segment" id="footer">
        <div className="ui middle aligned six column centered stackable grid footer container">
          <div className="row">
            <div className="column middle aligned">
              <a className="link">
                <h4>{local.faq} / {local.help}</h4>
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

const React = require('react');

const Footer = React.createClass({
  render() {
    return (
      <div>
        <div className="ui middle aligned six column centered stackable grid footer container">
          <div className="row">
            <div className="column middle aligned"><a className="link">
                <h4>FAQ/Help</h4></a></div>
            <div className="column middle aligned"><a className="link">
                <h4>Jobs</h4></a></div>
            <div className="column middle aligned"><a className="link">
                <h4>Terms of Use</h4></a></div>
            <div className="column middle aligned"><a className="link">
                <h4>Privacy Policy</h4></a></div>
            <div className="column middle aligned"><a className="link">
                <h4>Copyright</h4></a></div>
            <div className="column middle aligned"><a className="link">
                <h4>Closed Captioning</h4></a></div>
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
  },
});

module.exports = Footer;

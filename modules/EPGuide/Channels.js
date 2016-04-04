import React       from 'react'

export default React.createClass({
  render() {
    return (
      <div className="ui container equal width channels grid pad-large">
        <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
          <div className="ui bottom attached label">Melody Aflam</div>
        </div>
        <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
          <div className="ui bottom attached label">Melody Classic</div>
        </div>
        <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
          <div className="ui bottom attached label">Melody Drama</div>
        </div>
        <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
          <div className="ui bottom attached label">Melody Hits</div>
        </div>
        <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
          <div className="ui bottom attached label">Melody General</div>
        </div>
        <div className="column"><img src="/images/melody-logo.png" className="ui tiny image centered"/>
          <div className="ui bottom attached label">Melody Radio</div>
        </div>
      </div>
    );
  }
});

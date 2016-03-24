const React = require('react');

const WatchlistGrid = React.createClass({
  render() {
    return (
      <div className="ui vertical center container details my-watchlist grids">
        <div className="ui equal width grid container bottom-padding">
          <div className="row">
            <a className="image preview">
                <div className="image preview thumb" style={{"backgroundImage": 'url(/images/melody/M21031.jpg) !important'}}>
                <div className="ui bottom attached label">El Sayed Abo El Araby Wasal</div>
              </div>
            </a>
            <a className="image preview">
              <div className="image preview thumb" style={{"backgroundImage": 'url(/images/melody/M21032.jpg) !important'}}>
                <div className="ui bottom attached label">Losoos Khamas Nogoom</div>
              </div>
            </a>
            <a className="image preview">
              <div className="image preview thumb" style={{"backgroundImage": 'url(/images/melody/M22016.jpg) !important'}}>
                <div className="ui bottom attached label">Dalou3a Ya Beih</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WatchlistGrid;

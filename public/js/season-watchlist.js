const React = require('react');

const SeasonWatchlist = React.createClass({
  render() {
    var ROWS = []
    if (!this.props.episodes)
      return (<div className="row watchlist"></div>)
    this.props.episodes.map((episode, i) => {
      ROWS.push(<WatchlistRow key={'watchlist-'+i} episode={episode} />)
    })
    return (
      <div className="ui stackable grid">
        {ROWS}
      </div>
    );
  },
  componentDidMount: function() {
    console.log("Grid > Row > Watchlist [Properties]", this.props)
  }
});

const WatchlistRow = React.createClass({
  render() {
    return (
      <div className="row watchlist">
        <div className="sixteen wide tablet four wide computer column tight-right">
          <i className="play large icon watchlist-button tight"></i>
          <i className="plus icon watchlist-button"></i>
          <span className="watchlist-button">Ep {this.props.index}</span>
        </div>
        <div className="sixteen wide tablet eleven wide computer column tight-left">
          <div className="ui progress watchlist small error episode">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    )
  }
})

function generateLink(props){
  var link = props.href;
  var keys = props.href.match(/[:]\w+/g);
  keys.map((key) => {
    var _key = key.replace(':','')
    if (props.data[_key]) {
      link = link.replace(key, props.data[_key])
    }
  })
  return link;
}

module.exports = SeasonWatchlist;

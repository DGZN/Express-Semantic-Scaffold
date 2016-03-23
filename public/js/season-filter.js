const React = require('react');

const SeasonFilter = React.createClass({
  render() {
    var SEASONS = []
    this.props.seasons.map((season, i) => {
      SEASONS.push(<a key={i} className="item">SEASON {i+1}</a>)
    })
    return (
      <div className="row subnav">
        <span className="title">Series {this.props.title} season 1</span>
        <div id="seasons-dropdown" className="ui simple dropdown item inverted">
          SEASON 1
          <i className="plus icon"></i>
          <div className="menu">
            {SEASONS}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SeasonFilter;

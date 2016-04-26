import React       from 'react'
const env = require('./env.js')

export default React.createClass({

  getInitialState: function() {
    return {
      filter: ''
    , genres: []
    };
  },

  componentDidMount: function() {
    if ( ! this.props.genres ) {
      this.fetch = $.get(env.endpoint + '/v1/assets/sets/Genres', function (genres) {
        this.setState({
          genres: genres['sets']
        });
      }.bind(this));
    }
  },

  componentWillUnmount: function() {
    if (this.fetch)
      this.fetch.abort();
  },

  render() {
    var local = this.props.local;
    var title = this.props.activeGenre[this.props.language]
      ? this.props.activeGenre[this.props.language].name
      : local.genres;
    var GENRES = []
    var _genres = this.props.genres || this.state.genres;
    _genres.map((genre, i) => {
        if (genre.meta[this.props.language]) {
          var name = genre.meta[this.props.language].name;
          GENRES.push(
            <a
              className="item"
              key={i*Math.random(9,99)}
              onClick={this.props.filterGenre.bind(null, genre.meta)}> {name}
            </a>
          )
        }
    })
    return (
      <div className="ui container grids pad-bottom-medium">
        <div className="row subnav"><span className="title">{local[this.props.title]}</span>
          <div id="seasons-dropdown" className="ui simple dropdown item inverted">
            {title} <i className="plus icon"></i>
            <div className="menu">
              {GENRES}
            </div>
          </div>
          <div id="seasons-dropdown" className="ui simple dropdown item inverted">
          {local.sortBy} <i className="plus icon"></i>
            <div className="menu">
              <a className="item" onClick={this.props.filter.bind(null, 'featured')}>{local.featured}</a>
              <a className="item" onClick={this.props.filter.bind(null, 'a-z')}>{local.az}</a>
              <a className="item" onClick={this.props.filter.bind(null, 'new')}>{local.justAdded}</a>
              <a className="item" onClick={this.props.filter.bind(null, 'top')}>{local.top}</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

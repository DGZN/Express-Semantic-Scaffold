const React = require('react');

const GridFilter = React.createClass({

  getInitialState: function() {
    return {
      filter: ''
    , genres: []
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://util.giantdev.com/v1/assets/sets/Genres', function (genres) {
      var genres = JSON.parse(genres)
      this.setState({
        genres: genres['sets']
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var title = this.props.activeGenre[this.props.language]
      ? this.props.activeGenre[this.props.language].name
      : 'Genres';
    var GENRES = []
    this.state.genres.map((genre, i) => {
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
        <div className="row subnav"><span className="title">{this.props.title}</span>
          <div id="seasons-dropdown" className="ui simple dropdown item inverted">
            {title} <i className="plus icon"></i>
            <div className="menu">
              {GENRES}
            </div>
          </div>
          <div id="seasons-dropdown" className="ui simple dropdown item inverted">
            SORT BY <i className="plus icon"></i>
            <div className="menu">
              <a className="item" onClick={this.props.filter.bind(null, 'featured')}>FEATURED</a>
              <a className="item" onClick={this.props.filter.bind(null, 'a-z')}>A -Z</a>
              <a className="item" onClick={this.props.filter.bind(null, 'new')}>JUST ADDED</a>
              <a className="item" onClick={this.props.filter.bind(null, 'top')}>TOP</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = GridFilter;

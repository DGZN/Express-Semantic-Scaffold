const React = require('react');

const GridFilter = React.createClass({
  getInitialState: function() {
    return {
      genres: []
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://dgzn.io:8080/v1/assets/sets/Genres', function (genres) {
      this.setState({
        genres: genres['sets']
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var defaultGenre = '';
    var GENRES = []
    this.state.genres.map((genre, i) => {
        if (genre.meta[this.props.language]) {
          if (i==0)
            defaultGenre = genre.meta[this.props.language].name
          GENRES.push(<a className="item" onClick={this.props.filterGenre.bind(null, genre.meta[this.props.language].name)}>{genre.meta[this.props.language].name}</a>)
        }
    })
    return (
      <div className="ui container grids pad-bottom-medium">
        <div className="row subnav"><span className="title">{this.props.title}</span>
          <div id="seasons-dropdown" className="ui simple dropdown item inverted">
            Genres <i className="plus icon"></i>
            <div className="menu">
              {GENRES}
            </div>
          </div>
          <div id="seasons-dropdown" className="ui simple dropdown item inverted">
            SORT BY <i className="plus icon"></i>
            <div className="menu">
              <a className="item">FEATURED</a>
              <a className="item">A -Z</a>
              <a className="item">JUST ADDED</a>
              <a className="item">TOP</a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = GridFilter;

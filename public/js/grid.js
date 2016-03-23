const React = require('react');
const GridFilter = require('./gridFilter.js');
const Column = require('./column.js')

const Grid = React.createClass({

  filterGenre: function(genre) {
    this.setState({
      genre: genre
    })
  },

  getInitialState: function() {
    return {
      genre: ''
    , collection: []
    , rows: this.props.rows || 1
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://dgzn.io:8080/v1/assets'+this.props.source, function (result) {
      this.setState({
        collection: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var ROWS = []
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      if (this.state.genre[this.props.language]) {
        if (data.genres) {
          data.genres.some((genre) => {
            if (genre.meta[this.props.language].name == this.state.genre[this.props.language].name) {
              COLUMNS.push(<Column key={'col-'+data.id} data={data} {...this.props} />)
              return true;
            }
          })
        }
      } else {
        COLUMNS.push(<Column key={'col-'+data.id} data={data} {...this.props} />)
      }
      if (COLUMNS.length==this.props.limit) {
        ROWS.push(<div className="row">
          {COLUMNS}
        </div>)
        COLUMNS = []
      }
      return ROWS.length === this.props.rows
    })
    if ( ! ROWS.length ) {
      ROWS.push(<div className="row">
        {COLUMNS}
      </div>)
    }
    return (
      <div>
        <GridFilter {...this.props} filterGenre={this.filterGenre} activeGenre={this.state.genre} />
        <div className="ui vertical center container aligned grids">
          <div className="ui equal width grid container">
            {ROWS}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Grid;

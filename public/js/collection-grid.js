const React = require('react');
const GridFilter = require('./gridFilter.js');
const Column = require('./column.js')

const CollectionGrid = React.createClass({

  filter: function(filter) {
    this.setState({
      filter: filter
    })
  },

  filterGenre: function(genre) {
    this.setState({
      genre: genre
    })
  },

  getInitialState: function() {
    return {
      genre: ''
    , meta: {
      en: { name: '' }
    , ar: { name: '' }
    }
    , collection: []
    , rows: this.props.rows || 1
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://util.giantdev.com/v1/assets'+this.props.source, function (result) {
      var result = JSON.parse(result)
      this.setState({
        meta: result.meta
      , collection: result.assets
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var ROWS = []
    var COLUMNS = [];

    var collection = this.state.collection

    if (this.state.filter) {
      switch (this.state.filter) {
        case 'a-z':
          var collection = this.state.collection.sort((a, b) => {
            if (a.meta[this.props.language].name < b.meta[this.props.language].name) return -1;
            if (a.meta[this.props.language].name > b.meta[this.props.language].name) return 1;
            return 0;
          })
          break;
        case 'new':
          var collection = this.state.collection.sort((a, b) => {
            return b.id - a.id;
          })
          break;
      }
    }

    collection.map((data, i) => {
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
    })
    if (COLUMNS.length) {
      ROWS.push(<div className="row">
      {COLUMNS}
      </div>)
    }
    return (
      <div>
        <GridFilter {...this.props} title={this.state.meta[this.props.language].name} filter={this.filter} filterGenre={this.filterGenre} activeFilter={this.state.filter} activeGenre={this.state.genre} />
        <div className="ui vertical center container aligned grids">
          <div className="ui equal width grid container">
            {ROWS}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = CollectionGrid;

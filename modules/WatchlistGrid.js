import React from 'react'
import Filter from './Filter'
import WatchlistColumn from './WatchlistColumn'

const env = require('./env.js')

export default React.createClass({

  getInitialState: function() {
    return {
      page: 0
    , genre: ''
    , activeGenre: ''
    , collection: []
    , rows: this.props.rows || 1
    };
  },

  componentDidMount: function() {
    if (this.props.user) {
      this.fetch = $.get(env.endpoint + '/v1/users/' +this.props.user.id + '/watchlist', function (result) {
        this.setState({
          collection: result
        });
      }.bind(this));
    }
  },

  filter: function(filter) {
    this.setState({
      filter: filter
    })
  },

  filterGenre: function(genre) {
    this.setState({
      genre: ''
    })
  },

  render() {
    var ROWS = []
    var COLUMNS = [];
    var collection = this.state.collection
    collection.map((data, i) => {
      var delay = delay + (i*i*0.9);
      if (delay > 1000)
        delay = 0;
      COLUMNS.push(<WatchlistColumn key={'col-watchlist-'+data.id+Math.random()} data={data} {...this.props} delay={delay} history={this.props.history} />)
      if (COLUMNS.length==this.props.limit) {
        ROWS.push(
          <div className="row"  key={'carousel-row-col-'+Math.random()}>
            {COLUMNS}
          </div>
        )
        COLUMNS = []
      }
    })
    if (COLUMNS.length) {
      ROWS.push(
        <div className="row" key={'caraousel-row-'+Math.random()}>
          {COLUMNS}
        </div>
      )
    }
    return (
      <div>
        <Filter {...this.props} filter={this.filter} filterGenre={this.filterGenre} activeFilter={this.state.filter} activeGenre={this.state.genre} />
        <div className="ui vertical center container aligned grids large-container">
          <div className="ui equal width grid container"  style={{ 'textAlign': this.props.textAlign }} id="rows">
            {ROWS}
          </div>
        </div>
      </div>
    );
  }
});

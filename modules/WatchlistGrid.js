import React from 'react'
import WatchlistColumn from './WatchlistColumn'

const env = require('./env.js')

export default React.createClass({

  getInitialState: function() {
    return {
      page: 0
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
      <div className="ui vertical center container details my-watchlist grids" key="watchlist-gridv">
        <div className="ui equal width grid container"  style={{ 'textAlign': this.props.textAlign }} id="rows">
          {ROWS}
        </div>
      </div>
    );
  }
});

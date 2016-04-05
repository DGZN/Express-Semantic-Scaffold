import React from 'react'

import Filter from './Filter'
import Column from './Column'

const env = require('./env.js')

export default React.createClass({

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
    , collection: []
    , rows: this.props.rows || 1
    };
  },

  componentDidMount: function() {
    this.fetch = $.get(env.endpoint + '/v1/assets' +this.props.source, function (result) {
      var result = this.props.sourceKey
                 ? result[this.props.sourceKey]
                 : result
      this.setState({
        collection: result
      });
    }.bind(this));
    if (this.props.featured) {
      this.fetchFeatured = $.get(env.endpoint + '/v1/assets' + this.props.featured, function (featured) {
        this.setState({
          featured: featured['assets']
        });
      }.bind(this));
    }
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
        case 'featured':
          if ( ! this.state.featured)
            return collection;
          var collection = this.state.featured.sort((a, b) => {
            return a.order - b.order;
          })
          collection.map((item) => {
            console.log(item.order)
          })
          break;
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
        ROWS.push(
          <div className="row">
            {COLUMNS}
          </div>
        )
        COLUMNS = []
      }
    })
    if (COLUMNS.length) {
      ROWS.push(
        <div className="row">
          {COLUMNS}
        </div>
      )
    }
    setTimeout(function(){
      $('.image.preview.thumb').each(function(i){
        $(this).delay(i*i*0.9).velocity({
          opacity: 1
        }, 0)
      })
    },0)
    return (
      <div>
        <Filter {...this.props} filter={this.filter} filterGenre={this.filterGenre} activeFilter={this.state.filter} activeGenre={this.state.genre} />
        <div className="ui vertical center container aligned grids large-container">
          <div className="ui equal width grid container"  style={{ 'textAlign': this.props.textAlign }}>
            {ROWS}
          </div>
        </div>
      </div>
    );
  },
});

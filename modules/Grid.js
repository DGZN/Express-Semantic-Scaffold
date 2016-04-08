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
      page: 0
    , genre: ''
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
    window.onscroll = function() {myFunction()};
    var self = this;
    function myFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          var page = self.state.page
          var top = document.body.scrollTop
          if (top < 1)
            top = document.documentElement.scrollTop;
          if (top > 13300 && page < 15) {
            return self.setState({
              page: 15
            })
          }
          if (top > 12300 && page < 14) {
            return self.setState({
              page: 14
            })
          }
          if (top > 11300 && page < 13) {
            return self.setState({
              page: 13
            })
          }
          if (top > 10300 && page < 12) {
            return self.setState({
              page: 12
            })
          }
          if (top > 9300 && page < 11) {
            return self.setState({
              page: 11
            })
          }
          if (top > 8200 && page < 10) {
            return self.setState({
              page: 10
            })
          }
          if (top > 7100 && page < 9) {
            return self.setState({
              page: 9
            })
          }
          if (top > 6000 && page < 8) {
            return self.setState({
              page: 8
            })
          }
          if (top > 5000 && page < 7) {
            return self.setState({
              page: 7
            })
          }
          if (top > 4000 && page < 6) {
            return self.setState({
              page: 6
            })
          }
          if (top > 3100 && page < 5) {
            return self.setState({
              page: 5
            })
          }
          if (top > 2200 && page < 4) {
            return self.setState({
              page: 4
            })
          }
          if (top > 1500 && page < 3) {
            return self.setState({
              page: 3
            })
          }
          if (top > 400 && page < 2) {
            return self.setState({
              page: 2
            })
          }
          if (top > 200 && page < 1) {
            return self.setState({
              page: 1
            })
          }
      }
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
    var perPage = 25;
    var startIndex = this.state.page
    if (startIndex > 0) {
      perPage = startIndex * perPage;
    }
    var delay = 0;
    var collection = collection.slice(0, perPage);
    console.log("Page", this.state.page);
    collection.map((data, i) => {
      var delay = delay + (i*i*0.9);
      if (delay > 1000)
        delay = 0;
      if (this.state.genre[this.props.language]) {
        if (data.genres) {
          data.genres.some((genre) => {
            if (genre.meta[this.props.language].name == this.state.genre[this.props.language].name) {
              COLUMNS.push(<Column key={'col-'+data.id+Math.random()*Math.random()} data={data} {...this.props} delay={delay} />)
              return true;
            } else {
              //COLUMNS.push(<Column key={'col-'+data.id+Math.random()*Math.random()} data={data} {...this.props} hidden="true" />)
            }
          })
        }
      } else {
        COLUMNS.push(<Column key={'col-'+data.id} data={data} {...this.props} delay={delay} />)
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

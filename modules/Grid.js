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
          console.log("current top", top)
          if (top > 21300 && page < 22) {
            return self.setState({
              page: 22
            })
          }
          if (top > 20300 && page < 24) {
            return self.setState({
              page: 24
            })
          }
          if (top > 19300 && page < 23) {
            return self.setState({
              page: 23
            })
          }
          if (top > 19300 && page < 22) {
            return self.setState({
              page: 22
            })
          }
          if (top > 18300 && page < 21) {
            return self.setState({
              page: 21
            })
          }
          if (top > 17300 && page < 20) {
            return self.setState({
              page: 20
            })
          }
          if (top > 16300 && page < 19) {
            return self.setState({
              page: 19
            })
          }
          if (top > 15300 && page < 18) {
            return self.setState({
              page: 18
            })
          }
          if (top > 14300 && page < 17) {
            return self.setState({
              page: 17
            })
          }
          if (top > 13200 && page < 16) {
            return self.setState({
              page: 16
            })
          }
          if (top > 12300 && page < 15) {
            return self.setState({
              page: 15
            })
          }
          if (top > 11300 && page < 14) {
            return self.setState({
              page: 14
            })
          }
          if (top > 10000 && page < 13) {
            return self.setState({
              page: 13
            })
          }
          if (top > 9300 && page < 12) {
            return self.setState({
              page: 12
            })
          }
          if (top > 8000 && page < 11) {
            return self.setState({
              page: 11
            })
          }
          if (top > 7000 && page < 10) {
            return self.setState({
              page: 10
            })
          }
          if (top > 6100 && page < 9) {
            return self.setState({
              page: 9
            })
          }
          if (top > 5200 && page < 8) {
            return self.setState({
              page: 8
            })
          }
          if (top > 4300 && page < 7) {
            return self.setState({
              page: 7
            })
          }
          if (top > 3400 && page < 6) {
            return self.setState({
              page: 6
            })
          }
          if (top > 2500 && page < 5) {
            return self.setState({
              page: 5
            })
          }
          if (top > 1700 && page < 4) {
            return self.setState({
              page: 4
            })
          }
          if (top > 900 && page < 3) {
            return self.setState({
              page: 3
            })
          }
          if (top > 250 && page < 2) {
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

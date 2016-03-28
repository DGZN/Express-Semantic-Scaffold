const React = require('react');

const SeasonFilter = require('./season-filter.js')
const SeasonWatchlist = require('./season-watchlist.js')
const Roles = require('./roles.js');

const SeasonDetail = React.createClass({

  getInitialState: function() {
    return {
      series: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://util.giantdev.com/v1/assets'+this.props.source, function (result) {
      this.setState({
        series: JSON.parse(result)
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var series = {
      name: ''
    , description: ''
    , thumb: '/images/wireframe/16x9.png'
    , seasonText: 'Season 1'
    , productionYear: ''
    , duration: 0
    , seasons: []
    , episodes: []
    }
    if (this.state.series) {
      var _roles = this.state.series.seasons[0].roles
      var roles = []
      this.state.series.seasons[0].people.map((person) => {
        roles[_roles[person.role].meta[this.props.language].name] = roles[_roles[person.role].meta[this.props.language].name] || [];
        roles[_roles[person.role].meta[this.props.language].name].push(person)
      })
      var series = {
        name: this.state.series.meta[this.props.language].name
      , description: this.state.series.meta[this.props.language].description
      , thumb: '/images/melody/' + this.state.series.thumb.replace('M1','M11')
      , seasonText: 'Season 1'
      , productionYear: 'Released ' + this.state.series['production_year']
      , duration: Math.floor(this.state.series.seasons[0].episodes[0].duration / 60) + ' min'
      , seasons: this.state.series.seasons
      , episodes: this.state.series.seasons[0].episodes
      , roles: roles
      }
    }
    setTimeout(function(){
      $('#watchlist-sidebar')
        .sidebar('attach events', '.watchlist.item')
      ;
    }, 1000)
    return (
      <div>
        <div className="ui container grids">
          <SeasonFilter title={series.name} seasons={series.seasons} />
        </div>
        <div className="ui vertical center container aligned grids">
          <div className="ui two column grid container details pad-top-medium">
            <div className="details six wide computer only column centered season-watchlist">
              <SeasonWatchlist language={this.props.language} episodes={series.episodes} />
            </div>
            <div className="details sixteen wide tablet seven wide computer column centered">
              <div id="video-slide-out"></div>
              <div className="season-detail">
                <img src={series.thumb} className="ui huge image pad-right-small"/>
                <h1>{series.name}</h1>
                <h3>{series.seriesText}</h3>
                <h4 className="pad-right-medium">{series.description}</h4>
                <div className="ui one column grid center">
                  <div className="row">
                    <div className="column tight">
                      <div className="movie-details">
                        <span>{series.duration}</span><span>{series.productionYear}</span>
                      </div>
                      <div className="movie-actions">
                        <img src="/images/play-button.png" className="ui image"/>
                        <img src="/images/add-button.png" className="ui image"/>
                        <img src="/images/social-share-circle-icons.png" className="ui image social-share"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details sixteen wide tablet three wide computer column centered season-detail">
              <Roles roles={series.roles} language={this.props.language} colWidth="sixteen" />
            </div>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = SeasonDetail;

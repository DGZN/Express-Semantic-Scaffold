import React from 'react'

import SeasonFilter from './SeasonFilter'
import SeasonWatchlist from './SeasonWatchlist'
import Roles from './Roles'

const env = require('./env.js')

export default React.createClass({

  getInitialState: function() {
    return {
      series: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get(env.endpoint + '/v1/assets' +this.props.source, function (result) {
      this.setState({
        series: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  addToWatchlist(e) {
    if ( ! this.state.series.uuid || ! this.props.user )
      return;
    $('.addToWatchlist').velocity({
      opacity: 0
    }, 500)
    $.post(env.endpoint + '/v1/users/' +this.props.user.id + '/watchlist', {
      uuid: this.state.series.uuid
    }, function (result) {

    }.bind(this))
  },

  render() {
    var local = this.props.local
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
      , productionYear: local.released + ' ' + this.state.series['production_year']
      , duration: Math.floor(this.state.series.seasons[0].episodes[0].duration / 60) + ' ' + local.min
      , seasons: this.state.series.seasons
      , episodes: this.state.series.seasons[0].episodes
      , roles: roles
      }
    }
    setTimeout(function(){
      $('.watchlist.item.left.aligned').show(250, function(){
        $('#watchlist-sidebar')
        .sidebar('attach events', '.watchlist.item')
        ;
      })
    }, 100)
    return (
      <div>
        <div className="ui container grids">
          <SeasonFilter title={series.name} seasons={series.seasons} local={local} />
        </div>
        <div className="ui vertical center container aligned grids" style={{ 'textAlign': this.props.textAlign }} >
          <div className="ui two column grid container details pad-top-medium" style={{ overflow: 'hidden' }} >
            <div className="details six wide computer only column centered season-watchlist">
              <SeasonWatchlist language={this.props.language} episodes={series.episodes} local={local} />
            </div>
            <div className="details sixteen wide tablet seven wide computer column centered">
              <div id="video-slide-out"></div>
              <div className="season-detail">
                <img src={series.thumb} className="ui huge image"/>
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
                        <img src="/images/add-button.png" className="ui image addToWatchlist" onClick={this.addToWatchlist}/>
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

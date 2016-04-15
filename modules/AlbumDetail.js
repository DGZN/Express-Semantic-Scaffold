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
        album: result
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
    }, 250)
    $.post(env.endpoint + '/v1/users/' +this.props.user.id + '/watchlist', {
      uuid: this.state.series.uuid
    }, function (result) {

    }.bind(this))
  },

  render() {
    var album = {
      name: ''
    , description: ''
    , albumText: 'Album 1'
    , songs: []
    , thumb: ''
    }
    if (this.state.album) {
      var _roles = this.state.album.songs[0].roles
      var roles = []
      this.state.album.songs[0].people.map((person) => {
        roles[_roles[person.role].meta[this.props.language].name] = roles[_roles[person.role].meta[this.props.language].name] || [];
        roles[_roles[person.role].meta[this.props.language].name].push(person)
      })
      var album = {
        name: this.state.album.meta.en.name
      , description: this.state.album.meta.en.description
      , albumText: 'Album 1'
      , songs: this.state.album.songs
      , thumb: '/images/melody/' + this.state.album.songs[0].thumb.replace('M1','M11')
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
        </div>
        <div className="ui vertical center container aligned grids" style={{ 'textAlign': this.props.textAlign }} >
          <div className="ui two column grid container details pad-top-medium" style={{ overflow: 'hidden' }} >
            <div className="details six wide computer only column centered season-watchlist">
              <SeasonWatchlist language={this.props.language} episodes={album.songs} />

            </div>
            <div className="details sixteen wide tablet seven wide computer column centered">
              <div id="video-slide-out"></div>
              <div className="season-detail">
                <img src={album.thumb} className="ui huge image"/>
                <h1>{album.name}</h1>
                <h3>{album.seriesText}</h3>
                <h4 className="pad-right-medium">{album.description}</h4>
                <div className="ui one column grid center">
                  <div className="row">
                    <div className="column tight">
                      <div className="movie-details">
                        <span>{album.duration}</span><span>{album.productionYear}</span>
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
              <Roles roles={album.roles} language={this.props.language} colWidth="sixteen" />
            </div>
          </div>
        </div>
      </div>
    );
  },
});

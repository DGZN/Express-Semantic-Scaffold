import React from 'react'

import Roles from './Roles'

const env = require('./env.js')

export default React.createClass({
  getInitialState: function() {
    return {
      movie: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get(env.endpoint + '/v1/assets' +this.props.source, function (result) {
      this.setState({
        movie: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var movie = {
      name: ''
    , description: ''
    , productionYear: 'Produced ' + this.state.movie['production_year']
    , duration: 0
    , player: ''
    }
    if (this.state.movie) {
      var _roles = this.state.movie.roles
      var roles = []
      this.state.movie.people.map((person) => {
        roles[_roles[person.role].meta[this.props.language].name] = roles[_roles[person.role].meta[this.props.language].name] || [];
        roles[_roles[person.role].meta[this.props.language].name].push(person)
      })
      var movie = {
        name: this.state.movie.meta[this.props.language].name
      , description: this.state.movie.meta[this.props.language].description
      , productionYear: 'Produced ' + this.state.movie['production_year']
      , duration: Math.floor(this.state.movie.duration / 60) + ' min'
      , player: this.getPlayer(this.state.movie['video_url'])
      , roles: roles
      }
    }
    return (
      <div className="ui vertical center container aligned grids pad-top-medium">
        <div className="ui vertical center container aligned grids pad-top-medium" style={{ 'textAlign': this.props.textAlign }}>
          <div className="ui two column grid container">
            <div className="details sixteen wide tablet eight wide computer column centered" dangerouslySetInnerHTML={{__html:movie.player}}>
            </div>
            <div className="details sixteen wide tablet eight wide computer column centered">
              <img src="/images/banner01.png" className="ui image hidden"/>
              <h2>{movie.name}</h2>
              <h4>{movie.description}</h4>
              <div className="ui one column grid center">
                <div className="row">
                  <div className="column tight">
                    <div className="movie-details"><span>{movie.duration}</span><span>{movie.productionYear}</span></div>
                    <div className="movie-actions">
                      <img src="/images/add-button.png" className="ui image addToWatchlist" onClick={this.addToWatchlist}/>
                      <img src="/images/social-share-circle-icons.png" className="ui image social-share"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui grid container details">
            <div className="details sixteen wide tablet sixteen wide computer column centered">
              <Roles roles={movie.roles} language={this.props.language} />
            </div>
          </div>
        </div>
      </div>
    );
  },

  getPlayer: function(url){
    if (url.indexOf('youtube')>=0)
      return YouTubePlayer(url.split('v=')[1])
    if (url.indexOf('bctid'))
      return BrightCovePlayer(url.split('&bctid=')[1])
  },

  addToWatchlist(e) {
    if ( ! this.state.movie.uuid || ! this.props.user )
      return;
    $('.addToWatchlist').velocity({
      opacity: 0
    }, 250)
    $.post(env.endpoint + '/v1/users/' +this.props.user.id + '/watchlist', {
      uuid: this.state.movie.uuid
    }, function (result) {
    }.bind(this))
  }
});

function YouTubePlayer(id){
  return '<iframe width="98%" height="407" src="https://www.youtube.com/embed/'+id+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
}

function BrightCovePlayer(id){
    return ('<object id="flashObj" width="98%" height="407" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0"> \
      <param name="movie" value="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" />                                                                                                          \
      <param name="bgcolor" value="#FFFFFF" />                                                                                                                                                                    \
      <param name="flashVars" value="videoId='+id+'&playerID=3815086849001&playerKey=AQ~~,AAADd9u4__E~,fHl6JWluMnctnUR7lsNevXxKfibpHuew&domain=embed&dynamicStreaming=true" />                             \
      <param name="base" value="http://admin.brightcove.com" />                                                                                                                                                   \
      <param name="seamlesstabbing" value="false" /> \
      <param name="allowFullScreen" value="true" /> \
      <param name="swLiveConnect" value="true" /> \
      <param name="allowScriptAccess" value="always" /> \
      <embed src="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" bgcolor="#FFFFFF"  flashVars="videoId='+id+'&playerID=3815086849001&playerKey=AQ~~,AAADd9u4__E~,fHl6JWluMnctnUR7lsNevXxKfibpHuew&domain=embed&dynamicStreaming=true" base="http://admin.brightcove.com" name="flashObj" width="98%" height="407" seamlesstabbing="false" type="application/x-shockwave-flash" allowFullScreen="true" allowScriptAccess="always" swLiveConnect="true" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"> \
    </embed></object>')
}

const React = require('react');

const VideoDetail = React.createClass({
  getInitialState: function() {
    return {
      movie: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://util.giantdev.com/v1/assets'+this.props.source, function (result) {
      this.setState({
        movie: result[0]
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
    , player: ''
    }
    if (this.state.movie) {
      var movie = {
        name: this.state.movie.meta[this.props.language].name
      , description: this.state.movie.meta[this.props.language].description
      , productionYear: 'Produced ' + this.state.movie['production_year']
      , player: this.getPlayer(this.state.movie['video_url'])
      }
    }
    return (
      <div className="ui vertical center container aligned grids pad-top-medium">
        <div className="ui vertical center container aligned grids pad-top-medium">
          <div className="ui two column grid container">
            <div className="details sixteen wide tablet eight wide computer column centered" dangerouslySetInnerHTML={{__html:movie.player}}>
            </div>
            <div className="details sixteen wide tablet eight wide computer column centered"><img src="/images/banner01.png" className="ui image"/>
              <h2>{movie.name}</h2>
              <h4>{movie.description}</h4>
              <div className="ui one column grid center">
                <div className="row">
                  <div className="column tight">
                    <div className="movie-details"><span>R</span><span>123 min</span><span>{movie.productionYear}</span><span>5.1</span><span>HD</span></div>
                    <div className="movie-actions"><img src="/images/play-button.png" className="ui image"/><img src="/images/add-button.png" className="ui image"/><img src="/images/social-share-circle-icons.png" className="ui image social-share"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui grid container details">
            <div className="details sixteen wide tablet sixteen wide computer column centered">
              <div className="ui three column grid container stackable">
                <div className="cast three wide computer five wide tablet column tight">
                  <div className="ui top attached label detailHeading">Producers</div>
                  <div className="ui grid">
                    <div className="row">
                      <div className="pad-top-medium column tight">
                        <ul className="meta tight">
                          <li>Alex</li>
                          <li>Noma</li>
                          <li>Alex</li>
                          <li>Noma</li>
                        </ul>
                      </div>
                      <div className="pad-top-medium column tight">
                        <ul className="meta values">
                          <li>Shiradashi Smith</li>
                          <li>Jane Doe</li>
                          <li>John Smit</li>
                          <li>Someone</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cast three wide computer five wide tablet column tight">
                  <div className="ui top attached label detailHeading">Directors</div>
                  <div className="ui grid">
                    <div className="row">
                      <div className="pad-top-medium column tight">
                        <ul className="meta tight">
                          <li>Alex</li>
                          <li>Noma</li>
                          <li>Alex</li>
                          <li>Noma</li>
                          <div className="column"></div>
                        </ul>
                      </div>
                      <div className="pad-top-medium column tight">
                        <ul className="meta values">
                          <li>Shiradashi Smith</li>
                          <li>Jane Doe</li>
                          <li>John Smit</li>
                          <li>Someone</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cast three wide computer five wide tablet column tight">
                  <div className="ui top attached label detailHeading">Cast & Crew</div>
                  <div className="ui grid">
                    <div className="row">
                      <div className="pad-top-medium column tight">
                        <ul className="meta tight">
                          <li>Alex</li>
                          <li>Noma</li>
                          <li>Alex</li>
                          <li>Noma</li>
                        </ul>
                      </div>
                      <div className="pad-top-medium column tight">
                        <ul className="meta values">
                          <li>Shiradashi Smith</li>
                          <li>Jane Doe</li>
                          <li>John Smit</li>
                          <li>Someone</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  getPlayer: function(url){
    console.log("getting player url", url)
    if (url.indexOf('youtube')>=0)
      return YouTubePlayer(url.split('v=')[1])
    if (url.indexOf('bctid'))
      return BrightCovePlayer(url.split('&bctid=')[1])
  }
});

function YouTubePlayer(id){
  return '<iframe width="98%" height="407" src="https://www.youtube.com/embed/'+id+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
}

function BrightCovePlayer(id){
    console.log("BrightcoveID", id)
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


module.exports = VideoDetail;

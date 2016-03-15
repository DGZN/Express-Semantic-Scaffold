const React = require('react');

const MovieDetail = React.createClass({
  getInitialState: function() {
    return {
      movie: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://localhost:8000/v1/assets'+this.props.source, function (result) {
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
    }
    if (this.state.movie) {
      var movie = {
        name: this.state.movie.meta.en.name
      , description: this.state.movie.meta.en.description
      , productionYear: 'Produced ' + this.state.movie['production_year']
      }
    }
    return (
      <div className="ui two column grid container">
        <div className="details sixteen wide tablet eight wide computer column centered">
          <object id="flashObj" width="754" height="407" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0">
            <param name="movie" value="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&amp;isUI=1"/>
            <param name="bgcolor" value="#FFFFFF"/>
            <param name="flashVars" value="videoId=4564740753001&amp;playerID=3815086849001&amp;playerKey=AQ~~,AAADd9u4__E~,fHl6JWluMnctnUR7lsNevXxKfibpHuew&amp;domain=embed&amp;dynamicStreaming=true"/>
            <param name="base" value="http://admin.brightcove.com"/>
            <param name="seamlesstabbing" value="false"/>
            <param name="allowFullScreen" value="true"/>
            <param name="swLiveConnect" value="true"/>
            <param name="allowScriptAccess" value="always"/>
            <embed src="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&amp;isUI=1" bgcolor="#FFFFFF" flashvars="videoId=4564740753001&amp;playerID=3815086849001&amp;playerKey=AQ~~,AAADd9u4__E~,fHl6JWluMnctnUR7lsNevXxKfibpHuew&amp;domain=embed&amp;dynamicStreaming=true" base="http://admin.brightcove.com" name="flashObj" width="98%" height="407" seamlesstabbing="false" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" swliveconnect="true" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"/>
          </object>
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
    );
  },
});

module.exports = MovieDetail;

import React from 'react'

export default React.createClass({

  render() {
    if (this.props.video) {
      var video = {
        duration: Math.floor(this.props.video.duration / 60) + ' min'
      , player: this.getPlayer(this.props.video['video_url'])
      }
    }
    return (
      <div className="ui vertical center container aligned grids pad-top-medium">
        <div className="ui vertical center container aligned grids pad-top-medium">
          <div className="ui one column grid container videoPlayer">
            <div className="details column " dangerouslySetInnerHTML={{__html:video.player}}>
            </div>
          </div>
          <div className="ui grid container details">
            <div className="details sixteen wide tablet sixteen wide computer column centered" style={{height: "80px"}}>
              <i className="ui reply big icon close-video-slideout" onClick={this.closeVideoSlideOut}></i>
            </div>
          </div>
        </div>
      </div>
    );
  },

  closeVideoSlideOut() {
    $('#video-slide-out, .videoPlayer').velocity({
      opacity: 0
    }, 750)
    $('.season-detail').velocity({
      opacity: "1"
    }, 640, "ease-in")
  },

  getPlayer: function(url){
    if (url.indexOf('youtube')>=0)
      return YouTubePlayer(url.split('v=')[1])
    if (url.indexOf('bctid'))
      return BrightCovePlayer(url.split('&bctid=')[1])
  }
});

function YouTubePlayer(id){
  return '<iframe width="98%" height="510" src="https://www.youtube.com/embed/'+id+'?rel=0&amp;controls=1&amp;showinfo=0" frameborder="0"  allowfullscreen></iframe>'
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

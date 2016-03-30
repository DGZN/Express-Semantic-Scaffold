import React from 'react'
import ReactDOM from 'react-dom'

import VideoPlayer from './VideoPlayer'

export default React.createClass({
  render() {
    var ROWS = []
    if (!this.props.episodes)
      return (<div className="row watchlist"></div>)
    this.props.episodes.map((episode, i) => {
      ROWS.push(<WatchlistRow key={'watchlist-'+i} episode={episode} language={this.props.language} />)
    })
    return (
      <div className="ui stackable grid">
        {ROWS}
      </div>
    );
  },
  componentDidMount: function() {
    console.log("Grid > Row > Watchlist [Properties]", this.props)
  }
});

const WatchlistRow = React.createClass({

  render() {
    return (
      <div className="row watchlist">
        <div className="sixteen wide tablet four wide computer column tight-right">
          <i className="play large icon watchlist-button tight" onClick={this.playEpisode}></i>
          <i className="plus icon watchlist-button"></i>
          <span className="watchlist-button">Ep {this.props.episode.episode_number}</span>
        </div>
        <div className="sixteen wide tablet eleven wide computer column tight-left">
          <div className="ui progress watchlist small error episode">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    )
  },

  playEpisode() {

    const episode = this.props.episode;
    const language = this.props.language;

    $('#video-slide-out, .videoPlayer').animate({
      opacity: 0
    }, function(){
      ReactDOM.render(
        <VideoPlayer video={episode} language={language} />,
        document.getElementById('video-slide-out')
      );
    })

    $('.season-detail').velocity({
      opacity: "0"
    }, 740, "ease-out")

    $('#video-slide-out').velocity({
        "left": "0%"
      , "position": "absolute"
      , "width": "1000px"
      , "height": "100%"
      , "display": "block"
      , "opacity": "0"
      , "z-index": "1"
    }, 300, "easeOutQuart").velocity({
        top: "-4.5%"
      , opacity: "1"
    } , 1500, "easeOutQuart")

    $('.videoPlayer').velocity({
        top: "-4.5%"
      , opacity: "1"
    }, 1500, "easeOutQuart")

  }
})

function generateLink(props){
  var link = props.href;
  var keys = props.href.match(/[:]\w+/g);
  keys.map((key) => {
    var _key = key.replace(':','')
    if (props.data[_key]) {
      link = link.replace(key, props.data[_key])
    }
  })
  return link;
}

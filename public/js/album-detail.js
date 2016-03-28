const React = require('react');
const AlbumWatchlist = require('./album-watchlist.js');

const env = require('./env.js');

const AlbumDetail = React.createClass({
  getInitialState: function() {
    return {
      album: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get(env.endpoint + '/v1/assets' + this.props.source, function (result) {
      var result = JSON.parse(result)
      this.setState({
        album: result[0]
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var album = {
      name: ''
    , description: ''
    , albumText: 'Album 1'
    , songs: []
    }
    if (this.state.album) {
      var album = {
        name: this.state.album.meta.en.name
      , description: this.state.album.meta.en.description
      , albumText: 'Album 1'
      , songs: this.state.album.songs
      }
    }
    return (
      <div className="ui two column grid container details pad-top-medium">
        <div className="details six wide computer only column centered">
          <AlbumWatchlist songs={album.songs} />
        </div>
        <div className="details sixteen wide tablet seven wide computer column centered">
          <img src="/images/wireframe/16x9.png" className="ui huge image pad-right-small"/>
          <h1>{album.name}</h1>
          <h3>{album.albumText}</h3>
          <h4 className="pad-right-medium">{album.description}</h4>
          <div className="ui one column grid center">
            <div className="row">
              <div className="column tight">
                <div className="movie-details">
                  <span>R</span><span>123 min</span><span>5.1</span><span>HD</span>
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
        <div className="details sixteen wide tablet three wide computer column centered">
          <div className="ui three column grid container stackable">
            <div className="cast sixteen wide computer five wide tablet column tight">
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
            <div className="cast sixteen wide computer five wide tablet column tight">
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
            <div className="cast sixteen wide computer five wide tablet column tight">
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
    );
  },
});

module.exports = AlbumDetail;

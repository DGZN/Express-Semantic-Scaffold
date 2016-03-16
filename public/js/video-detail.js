const React = require('react');

const VideoDetail = React.createClass({
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
    , videoURL: ''
    }
    if (this.state.movie) {
      var movie = {
        name: this.state.movie.meta.en.name
      , description: this.state.movie.meta.en.description
      , productionYear: 'Produced ' + this.state.movie['production_year']
      , videoURL: this.state.movie['video_url']
      }
    }
    return (
      <div class="ui vertical center container aligned grids pad-top-medium">
        <div className="ui two column grid container">
          <div className="details sixteen wide tablet eight wide computer column centered">
            <iframe src={movie.videoURL} width="754" height="407"></iframe>
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
    );
  },
});

module.exports = VideoDetail;

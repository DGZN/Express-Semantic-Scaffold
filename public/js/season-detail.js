const React = require('react');

const SeasonWatchlist = require('./season-watchlist.js')

const SeasonDetail = React.createClass({
  getInitialState: function() {
    return {
      series: ''
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://localhost:8000/v1/assets'+this.props.source, function (result) {
      this.setState({
        series: result[0]
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
    , seasonText: 'Season 1'
    , productionYear: ''
    , seasons: []
    , episodes: []
    }
    if (this.state.series) {
      var series = {
        name: this.state.series.meta.en.name
      , description: this.state.series.meta.en.description
      , seasonText: 'Season 1'
      , productionYear: 'Released ' + this.state.series['production_year']
      , seasons: this.state.series.seasons
      , episodes: this.state.series.seasons[0].episodes
      }
    }
    return (
      <div>
        <div className="ui container grids">
          <SeasonFilterNav seasons={series.seasons} />
        </div>
        <div className="ui vertical center container aligned grids">
          <div className="ui two column grid container details pad-top-medium">
            <div className="details six wide computer only column centered">
              <SeasonWatchlist episodes={series.episodes} />
            </div>
            <div className="details sixteen wide tablet seven wide computer column centered">
              <img src="/images/wireframe/16x9.png" className="ui huge image pad-right-small"/>
              <h1>{series.name}</h1>
              <h3>{series.seriesText}</h3>
              <h4 className="pad-right-medium">{series.description}</h4>
              <div className="ui one column grid center">
                <div className="row">
                  <div className="column tight">
                    <div className="movie-details">
                      <span>R</span><span>123 min</span><span>{series.productionYear}</span><span>5.1</span><span>HD</span>
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
        </div>
      </div>
    );
  },
});

const SeasonFilterNav = React.createClass({
  render() {
    if (!this.props.seasons || this.props.seasons.length <= 1)
      return (
        <div className="row subnav">
          <span className="title">Series khatem seliman season 1</span>
        </div>
      )
    var SEASONS = []
    this.props.seasons.map((season, i) => {
      SEASONS.push(<a key={i} className="item">SEASON {i+1}</a>)
    })
    return (
      <div className="row subnav">
        <span className="title">Series khatem seliman season 1</span>
        <div id="seasons-dropdown" className="ui simple dropdown item inverted">
          SEASON 1
          <i className="plus icon"></i>
          <div className="menu">
            {SEASONS}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SeasonDetail;

const React = require('react');

const MyAccount = require('./my-account.js')
const MyWatchlist = require('./my-watchlist.js')
const Nav = require('./nav.js')
const Carousel = require('./carousel.js')
const Footer = require('./footer.js')

const HomeApp = React.createClass({

  setLanguage: function(lang) {
    this.setState({
      language: lang
    })
  },

  getInitialState: function() {
    return {
      language: 'en'
    }
  },

  render() {
    return (
      <div>
        <MyAccount />
        <MyWatchlist />
        <Nav setLanguage={this.setLanguage} language={this.state.language} />
        <div className="ui container hero">
          <div id="img" className="ui image hero"></div>
        </div>
        <div className="ui vertical center container aligned grids">
          <Carousel title="Movies" source="/movies" limit="5" href="/movies/:id" />
          <Carousel title="Series" source="/series" limit="5" href="/series/:id" />
          <Carousel title="Plays"  source="/plays"  limit="5" href="/plays/:id" />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = HomeApp;

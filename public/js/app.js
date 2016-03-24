const React = require('react');

const MyAccount = require('./my-account.js')
const MyWatchlist = require('./my-watchlist.js')
const Nav = require('./nav.js')
const VideoDetail = require('./video-detail.js')
const SimilarTitles = require('./similar-titles.js')
const Footer = require('./footer.js')

const App = React.createClass({

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
        <VideoDetail {...this.props} language={this.state.language} />
        <SimilarTitles />
        <Footer />
      </div>
    );
  }
});

module.exports = App;

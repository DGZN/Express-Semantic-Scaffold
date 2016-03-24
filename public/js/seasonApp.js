const React = require('react');

const MyAccount = require('./my-account.js')
const MyWatchlist = require('./my-watchlist.js')
const SeasonNav = require('./seasonNav.js')
const SeasonDetail = require('./season-detail.js')
const SimilarTitles = require('./similar-titles.js')
const Footer = require('./footer.js')

const SeasonApp = React.createClass({

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
        <SeasonNav setLanguage={this.setLanguage} language={this.state.language} />
        <SeasonDetail {...this.props} language={this.state.language} />
        <Footer />
      </div>
    );
  }
});

module.exports = SeasonApp;

const React = require('react');

const MyAccount = require('./my-account.js')
const MyWatchlist = require('./my-watchlist.js')
const Nav = require('./nav.js')
const Grid = require('./grid.js')
const SimilarTitles = require('./similar-titles.js')
const Footer = require('./footer.js')

const GridApp = React.createClass({

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
        <Grid {...this.props} language={this.state.language} />
        <Footer />
      </div>
    );
  }
});

module.exports = GridApp;

const React = require('react');

const SeasonNav = require('./seasonNav.js')
const SeasonDetail = require('./season-detail.js')
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
        <SeasonNav setLanguage={this.setLanguage} language={this.state.language} />
        <SeasonDetail {...this.props} language={this.state.language} />
        <Footer />
      </div>
    );
  }
});

module.exports = GridApp;

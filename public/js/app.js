const React = require('react');

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
        <Nav setLanguage={this.setLanguage} language={this.state.language} />
        <VideoDetail {...this.props} language={this.state.language} />
        <SimilarTitles />
        <Footer />
      </div>
    );
  }
});

module.exports = App;

import React       from 'react'

import Nav         from './Nav'
import Footer      from './Footer'
import MyWatchlist from './MyWatchlist'

export default React.createClass({
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
        <MyWatchlist />
        <Nav setLanguage={this.setLanguage} language={this.state.language} />
        {this.props.children && React.cloneElement(this.props.children, {
            language: this.state.language
          })}
        <Footer />
      </div>
    );
  }
});

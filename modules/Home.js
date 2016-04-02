import React from 'react'

import Carousel from './Carousel'

export default React.createClass({
  getInitialState() {
    return {
      language: 'en'
    }
  },
  render() {
    return (
      <div>
        <div className="ui container hero">
          <div id="img" className="ui image hero"></div>
        </div>
        <div className="ui vertical center container aligned grids carousel-container">
          <Carousel title="Movies" source="/movies" language={this.state.language} limit="15" href="/movies/:id" />
          <Carousel title="Series" source="/series" language={this.state.language} limit="10" href="/series/:id" />
          <Carousel title="Plays"  source="/plays" language={this.state.language}  limit="15" href="/plays/:id" />
        </div>
      </div>
    );
  }
});

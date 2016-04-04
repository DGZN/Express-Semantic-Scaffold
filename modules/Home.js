import React from 'react'
import Slider from 'react-slick'
import Carousel from './Carousel'

export default React.createClass({
  getInitialState() {
    return {
      language: 'en'
    }
  },
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: false,
      speed: 900,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      easing: 'easeInOutCubic'
    };
    return (
      <div>
        <div className="ui container hero">
          <Slider {...settings}>
            <div id="img" className="ui image hero"></div>
            <div id="img" className="ui image hero"></div>
            <div id="img" className="ui image hero"></div>
            <div id="img" className="ui image hero"></div>
          </Slider>
        </div>
        <div className="ui vertical center container aligned grids carousel-container">
          <Carousel title="Movies" source="/movies" language={this.props.language} limit="15" href="/movies/:id" />
          <Carousel title="Series" source="/series" language={this.props.language} limit="10" href="/series/:id" />
          <Carousel title="Plays"  source="/plays" language={this.props.language}  limit="15" href="/plays/:id" />
        </div>
      </div>
    );
  }
});

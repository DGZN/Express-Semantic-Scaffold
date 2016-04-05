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
      autoplaySpeed: 7500,
      infinite: false,
      speed: 1300,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      easing: 'easeInOut'
    };
    return (
      <div>
        <div className="ui container hero">
          <Slider {...settings}>
            <div id="img" className="ui image hero hero1"></div>
            <div id="img" className="ui image hero hero2"></div>
            <div id="img" className="ui image hero hero3"></div>
            <div id="img" className="ui image hero"></div>
          </Slider>
        </div>
        <div className="ui vertical center container aligned grids carousel-container" >
          <Carousel title="Movies" source="/movies" limit="15" href="/movies/:id"  {...this.props} />
          <Carousel title="Series" source="/series" limit="10" href="/series/:id" {...this.props}  />
          <Carousel title="Plays"  source="/plays"  limit="15" href="/plays/:id" {...this.props}   />
        </div>
      </div>
    );
  }
});

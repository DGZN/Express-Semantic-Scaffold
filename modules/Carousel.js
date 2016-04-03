import React from 'react'
import CarouselColumn from './CarouselColumn'
import Slider from 'react-slick'

import { Link } from 'react-router'

const env = require('./env.js')

class RightNavButton extends React.Component {

  handleClick(e) {
    console.log("clicked");
    // setTimeout(function(){
    //   ids.map((id, i) => {
    //     $(id).delay((i*i) * 2.5).velocity({
    //       opacity: 1
    //     })
    //   })
    // },100)
  }

  render() {
    return (<button className="carousel-right-arrow" {...this.props} onClick={this.handleClick}>Next</button>)
  }
}

export default React.createClass({

  getInitialState: function() {
    return {
      left: 1
    , collection: []
    };
  },

  componentDidMount: function() {
    this.fetch = $.get(env.endpoint + '/v1/assets' +this.props.source, function (result) {
      this.setState({
        collection: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    // <Row {...this.props} />
    var settings = {
      infinite: true,
      speed: 1400,
      fade: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      easing: 'ease-in',
      nextArrow: 'RightNavButton'
    };
    var self = this;
    var ids = []
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      var id = this.props.title + '-col' + (i + 1)
      var thumb = '/images/melody/' + data.thumb.replace('M1','M11');
      if (self.thumbPath) {
        thumb = '/images/wireframe/16x9.png';
      }
      ids.push('#'+id)
      COLUMNS.push(<div>
        <a className="carousel image preview" id={id}>
          <div className=" image " style={{"backgroundImage": 'url(' + thumb + ') !important'}} >
            <div className="ui bottom attached label">
              {data.meta[self.props.language].name}
            </div>
          </div>
        </a>
      </div>)
      return i === this.props.limit - 1;
    })
    var delay = 10;
    setTimeout(function(){
      ids.map((id, i) => {
        $(id).delay(i*i).velocity({
          opacity: 1
        }).addClass('thumb-fadeIn')
        // $(id).delay(0).velocity({
        //   opacity: 1
        // }, delay)
        // delay = (i * i * 5 * 50);
      })
    },100)
    return (
      <div>
        <div className="ui one column equal width grid container">
         <div className="column header">
            <Link to={'/'+this.props.title.toLowerCase()} className="item">
              <h4 className="ui header grid-title"><br/>{this.props.title} &gt;</h4>
            </Link>
         </div>
        </div>
        <div className="ui container carousel">
          <Slider {...settings}>
            {COLUMNS}
          </Slider>
        </div>
      </div>
    );
  }
});

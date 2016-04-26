import React from 'react'
import CarouselColumn from './CarouselColumn'
import Slider from 'react-slick'

import { Link } from 'react-router'

const env = require('./env.js')

class LeftNavButton extends React.Component {
  render() {
    return (<button className="carousel-left-arrow" {...this.props}>Next</button>)
  }
}


class RightNavButton extends React.Component {
  render() {
    return (<button className="carousel-right-arrow" {...this.props}>Next</button>)
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
      speed: 900,
      fade: false,
      useCSS: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      easing: 'easeInOutCubic',
      prevArrow: 'LeftNavButton',
      nextArrow: 'RightNavButton',
      variableWidth: true
    };
    // responsive: [ { breakpoint: 550, settings: { slidesToShow: 1 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 1160, settings: { slidesToShow: 3 } }, { breakpoint: 1420, settings: { slidesToShow: 4 } }, { breakpoint: 1425, settings: { slidesToShow: 5 } }]
    var self = this;
    var ids = []
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      var id = this.props.title + '-col' + (i + 1)
      var thumb = '/images/melody/' + data.thumb.replace('M1','M11');
      if (self.thumbPath) {
        thumb = '/images/wireframe/16x9.png';
      }
      if (data.ref) {
        var link = data.ref.link
      } else {
        self.props.href
          ? link = generateLink(self.props.href, data)
          : link = self.props.href;
      }
      ids.push('#'+id)
      COLUMNS.push(
      <div key={'carousel-col-'+Math.random()}>
        <Link to={link || '#'} className="carousel image preview"  id={id}>
          <div className=" image " style={{"backgroundImage": 'url(' + thumb + ') !important'}} >
            <div className="ui bottom attached label">
              {data.meta[self.props.language].name}
            </div>
          </div>
        </Link>
      </div>
      )
      ;
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
    var local = this.props.local
    return (
      <div key={'carousel-'+Math.random()}>
        <div className="ui one column equal width grid container">
         <div className="column header">
            <Link to={'/'+this.props.title.toLowerCase()} className="item">
              <h4 className="ui header grid-title"><br/>{local[this.props.title]} &gt;</h4>
            </Link>
         </div>
        </div>
        <div className="ui container carousel" style={{ 'textAlign': this.props.textAlign }}>
          <Slider {...settings}>
            {COLUMNS}
          </Slider>
        </div>
      </div>
    );
  }
});

function generateLink(href, props){
  var link = href;
  var keys = href.match(/[:]\w+/g);
  keys.map((key) => {
    var _key = key.replace(':','')
    if (props[_key]) {
      link = link.replace(key, props[_key])
    }
  })
  return link;
}

import React from 'react'
import Slider from 'react-slick'
import EPGuide from './EPGuide/'
import Carousel from './Carousel'

export default React.createClass({
  getInitialState() {
    return {
      language: 'en'
    }
  },

  componentDidMount() {
    $('.schedule.table td').on('click', function(e){
      var col = $(e.target).text()
      if (col.length) {
          var row = $(e.target).parent().data('row')
          var thumb = $(e.target).parent().data('img')
          var selectedChannel = '0px'
          switch (row) {
            case 2:
              var top = '118px;'
              break;
            case 3:
              var top = '182px;'
              break;
            case 4:
              var top = '244px;'
              break;
            case 5:
              var top = '307px;'
              var selectedChannel = '-137px'
              break;
            case 6:
              var top = '370px;'
              var selectedChannel = '-137px'
              break;
            default:
              var top = '56px'
          }
          $('#channel-content').velocity({
            opacity: 0
          }, 250, function(){
            $('h3.title').html(col)
            $('.blockDetails .title').html(col)
            $('.selected-thumb').attr('src', '/images/melody/' + thumb)
          }).delay(0).velocity({
            opacity: 1
          }, 260)

          $('.selectedChannel').show(300).velocity({
              top: top
            , opacity: 1
            , display: 'table-row !important'
          }, 'easeOutBack', 400)
          $('#selectedChannelBlock').velocity({
            top: selectedChannel
          }, 'easeOutCubic', 500)
      }
    })
  },

  componentWillUnmount() {
    $('.schedule.table td').off()
  },

  selectChannel(e) {
    console.log("channel selected", e.target)
  },

  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 7500,
      infinite: false,
      speed: 1300,
      useCSS: true,
      fade: false,
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
            <div id="img" className="ui image hero hero4"></div>
          </Slider>
        </div>
        <EPGuide />
      </div>
    );
  }
});

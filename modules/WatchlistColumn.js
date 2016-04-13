import React from 'react'
import { Router } from 'react-router'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState() {
    return {
      language: this.props.language ? this.props.language : 'en'
    }
  },

  componentWillReceiveProps(props) {
    this.setState({
      language: props.language ? props.language : 'en'
    })
  },

  WatchlistColumnClick(e, col) {
    e.preventDefault()
    console.log("watchlist column clicked")
    console.log($(e), 'target', e.target, '$', $(e.target), 'column', col)
  },

  render() {
    if (this.props.data.ref) {
      var link = this.props.data.ref.link
    } else {
      this.props.href
        ? link = generateLink(this.props)
        : link = this.props.href;
    }
    var thumb = '/images/melody/' + this.props.data.thumb.replace('M1','M11');
    if (this.props.thumbPath) {
      thumb = '/images/wireframe/16x9.png';
    }
    var self = this;
    var id = this.props.data.id
    var visible = this.props.className || ''
    var hrefCSS = 'image preview load '
    var thumbCSS = 'image preview thumb '
    var labelCSS = 'ui bottom attached label '
    var reset = 0;
    var delay = this.props.delay || 100;
    setTimeout(function(){
      $('#col-watchlist-'+id).velocity({
        opacity: 1
      }, 0).on('click', function(e){
        e.preventDefault()
        self.props.linkFromModal($(e.target).data('link'))
      })
    }, delay)
    return (
      <a href="#" className={hrefCSS} key={'col-watchlist-link-'+id} >
        <div className={thumbCSS} style={{"backgroundImage": 'url(' + thumb + ') !important'}} id={'col-watchlist-'+id} data-link={link} onClick={this.WatchlistColumnClick}>
          <div className={labelCSS}>{this.props.data.meta[this.state.language].name}</div>
        </div>
      </a>
    );
  },



});

function generateLink(props){
  var link = props.href;
  var keys = props.href.match(/[:]\w+/g);
  keys.map((key) => {
    var _key = key.replace(':','')
    if (props.data[_key]) {
      link = link.replace(key, props.data[_key])
    }
  })
  return link;
}

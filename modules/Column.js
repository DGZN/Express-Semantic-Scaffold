import React from 'react'

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
      thumb = '/images/melody/' + this.props.data[this.props.thumbPath];
    }
    var id = this.props.data.id
    var visible = this.props.className || ''
    var hrefCSS = 'image preview load '
    var thumbCSS = 'image preview thumb '
    var labelCSS = 'ui bottom attached label '
    // if (this.props.hidden) {
    //   hrefCSS+='hidden-thumb'
    //   thumbCSS+='hidden-thumb'
    //   labelCSS='hidden-thumb hidden'
    // }
    var reset = 0;
    var delay = this.props.delay || 100;
    // setTimeout(function(){
    //   $('#'+'col-'+id).velocity({
    //     opacity: 1
    //   }, 10)
    // }, 100)
    return (
      <Link to={link || '#'} className={hrefCSS} key={'#col-link-'+id+Math.random()} >
        <div className={thumbCSS} style={{"backgroundImage": 'url(' + thumb + ') !important'}} id={'col-'+id}>
          <div className={labelCSS}>{this.props.data.meta[this.state.language].name}</div>
        </div>
      </Link>
    );
  },

  componentDidMount() {

  },

  fadeInImages() {

  }
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

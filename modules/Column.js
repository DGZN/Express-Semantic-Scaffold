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
      thumb = '/images/wireframe/16x9.png';
    }
    var id = this.props.id
    var visible = this.props.className || ''
    return (
      <Link to={link || '#'} className="image preview load" >
        <div className={"image preview thumb " + visible} style={{"backgroundImage": 'url(' + thumb + ') !important'}} id={'col-'+id}>
          <div className="ui bottom attached label">{this.props.data.meta[this.state.language].name}</div>
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
  console.log("link", link, 'keys', keys, 'props', props)
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

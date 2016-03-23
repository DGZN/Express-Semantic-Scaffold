const React = require('react');

const Column = React.createClass({

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
    this.props.href
      ? link = generateLink(this.props)
      : link = this.props.href;
    var thumb = '/images/melody/' + this.props.data.thumb.replace('M1','M11');
    if (this.props.thumbPath) {
      thumb = '/images/wireframe/16x9.png';
    }
    return (
      <a href={link || '#'} className="image preview">
        <div className="image preview thumb" style={{"background-image": 'url(' + thumb + ') !important;'}}>
            <div className="ui bottom attached label">{this.props.data.meta[this.state.language].name}</div>
        </div>
      </a>
    );
  },
  componentDidMount: function() {
    //console.log("Grid > Row > Column [Properties]", this.props)
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

module.exports = Column;

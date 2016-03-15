const React = require('react');

const Column = React.createClass({
  render() {
    this.props.href
      ? link = generateLink(this.props)
      : link = this.props.href;
    return (
      <a href={link || '#'} className="image preview">
        <div className="image preview">
            <div className="ui bottom attached label">{this.props.data.meta.en.name}</div>
        </div>
      </a>
    );
  },
  componentDidMount: function() {
    console.log("Grid > Row > Column [Properties]", this.props)
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

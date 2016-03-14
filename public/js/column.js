const React = require('react');

const Column = React.createClass({
  render() {
    return (
      <div className="image preview">
        <a href={this.props.href || '#'}>
          <div className="ui bottom attached label">{this.props.data.meta.en.name}</div>
        </a>
      </div>
    );
  },
  componentDidMount: function() {
    console.log("Grid > Row > Column [Properties]", this.props)
  }
});

module.exports = Column;

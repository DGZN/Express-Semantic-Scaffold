const React = require('react');

const Person = React.createClass({
  render() {
    return (<li>{this.props.name}</li>);
  }
});

module.exports = Person;

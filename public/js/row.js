const React = require('react');

const Column = require('./column.js')

const Row = React.createClass({
  getInitialState: function() {
    return {
      collection: []
    };
  },

  componentDidMount: function() {
    this.fetch = $.get('http://dgzn.io:8080/v1/assets'+this.props.source, function (result) {
      this.setState({
        collection: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      COLUMNS.push(<Column key={i} data={data} href={this.props.href} />)
      return i === this.props.limit - 1;
    })
    return (
      <div className="row">
        {COLUMNS}
      </div>
    );
  }
});

module.exports = Row;

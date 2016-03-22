const React = require('react');
const Column = require('./column.js')

const Grid = React.createClass({
  getInitialState: function() {
    return {
      collection: []
    , rows: this.props.rows || 1
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
    var ROWS = []
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      COLUMNS.push(<Column key={i} data={data} {...this.props} />)
      if (COLUMNS.length==this.props.limit) {
        ROWS.push(<div className="row">
          {COLUMNS}
        </div>)
        COLUMNS = []
      }
      return ROWS.length === this.props.rows
    })
    return (
      <div className="ui equal width grid container">
        {ROWS}
      </div>
    );
  },
});

module.exports = Grid;

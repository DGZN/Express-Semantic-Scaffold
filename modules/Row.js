import React from 'react'
import Column from './Column'

const env = require('./env.js')

export default React.createClass({
  getInitialState: function() {
    return {
      collection: []
    };
  },

  componentDidMount: function() {
    this.fetch = $.get(env.endpoint + '/v1/assets' +this.props.source, function (result) {
      this.setState({
        collection: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.fetch.abort();
  },

  render() {
    console.log(this.state)
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      COLUMNS.push(<Column key={i} data={data} language={this.props.language} href={this.props.href} />)
      return i === this.props.limit - 1;
    })
    return (
      <div className="row">
        {COLUMNS}
      </div>
    );
  }
});

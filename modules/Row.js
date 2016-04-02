import React from 'react'
import Column from './Column'

const env = require('./env.js')

export default React.createClass({
  getInitialState: function() {
    return {
      left: 1
    , collection: []
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

  handleClick(row, e) {
    e.preventDefault()
    var duration = 75
    var easing = 'easeOutSine'
    var moveLeft = '-' + (parseInt(this.state.left) * 310)+ 'px'
    var left = this.state.left += 1
    if (left == 11) {
      duration = 1200
    , easing = 'easeOutQuart'
    }
    if (left >= 10) {
      left = 1;
    }
    $(row).children().each(function(i, child){
      if ($(child)[0].classList.toString().indexOf('image') >= 0) {
        $(child).velocity({
          translateX: moveLeft
        }, duration, easing)
      }
    })
    this.setState({
      left: left
    })
  },

  render() {
    var COLUMNS = [];
    this.state.collection.some((data, i) => {
      var id = this.props.title + '-col' + (i + 1)
      COLUMNS.push(<Column id={id} key={i} data={data} language={this.props.language} href={this.props.href} />)
      return i === this.props.limit - 1;
    })
    return (
      <div className="row" id={this.props.title + '-row'}>
        {COLUMNS}
        <a className="carousel-right-arrow" href="#" data-row={this.props.title + '-row'} onClick={this.handleClick.bind(null, '#' + this.props.title + '-row')}>
          <div className="carousel-right-arrow"></div>
        </a>
      </div>
    );
  }
});

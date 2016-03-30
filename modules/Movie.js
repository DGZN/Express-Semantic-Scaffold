import React from 'react'

import VideoDetail from './VideoDetail'

export default React.createClass({
  render() {
    var source = '/movies/' + this.props.params.id
    return (
      <VideoDetail {...this.props} source={source} />
    );
  }
});

import React from 'react'

import VideoDetail from './VideoDetail'

export default React.createClass({
  render() {
    // if (!this.props.user)
    //   this.props.myAccount()
    var source = '/movies/' + this.props.params.id
    return (
      <VideoDetail {...this.props} source={source} />
    );
  }
});

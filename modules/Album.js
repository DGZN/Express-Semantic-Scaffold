import React from 'react'

import AlbumDetail from './AlbumDetail'

export default React.createClass({
  render() {
    // if (!this.props.user)
    //   this.props.myAccount()
    var source = '/albums/' + this.props.params.id
    return (
      <AlbumDetail {...this.props} source={source} />
    );
  }
});

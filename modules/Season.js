import React from 'react'

import SeasonDetail from './SeasonDetail'

export default React.createClass({
  render() {
    // if (!this.props.user)
    //   this.props.myAccount()
    var source = '/series/' + this.props.params.id
    return (
      <SeasonDetail {...this.props} source={source} />
    );
  }
});

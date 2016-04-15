import React from 'react'

import Grid from './Grid'

export default React.createClass({
  render() {
    var source = '/sets/' + this.props.params.id
    return (
      <Grid
        {...this.props}
        limit="5"
        title="Collections"
        sourceKey="assets"
        source={source} />
    );
  }
});

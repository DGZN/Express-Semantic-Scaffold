import React from 'react'

import Grid from './Grid'

export default React.createClass({
  render() {
    return (
      <Grid
        {...this.props}
        limit="5"
        title="Music"
        source="/albums"
        href="/albums/:id" />
    );
  }
});

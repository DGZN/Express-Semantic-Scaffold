import React from 'react'

import Grid from './Grid'

export default React.createClass({
  render() {
    return (
      <Grid
        {...this.props}
        limit="5"
        title="Collections"
        source="/sets/collections"
        sourceKey="sets"
        href="/collections/:id" />
    );
  }
});

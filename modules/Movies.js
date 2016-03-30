import React from 'react'

import Grid from './Grid'

export default React.createClass({
  render() {
    return (
      <Grid
        {...this.props}
        limit="5"
        title="Movies"
        source="/movies"
        href="/movies/:id"
        featured="/sets/Featuredmovies" />
    );
  }
});

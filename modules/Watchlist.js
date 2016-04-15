import React from 'react'

import WatchlistGrid from './WatchlistGrid'

export default React.createClass({
  render() {
    return (
      <WatchlistGrid
        {...this.props}
        limit="5"
        title="Watchlist" />
    );
  }
});

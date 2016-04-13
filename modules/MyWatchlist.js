import React from 'react'

import WatchlistGrid from './WatchlistGrid'

export default React.createClass({

  render() {
    return (
      <div className="my-watchlist modal">
        <div className="ui grid">
          <div className="two column row account-settings">
            <div className="twelve wide column">
              <h3>Watchlist</h3>
              <WatchlistGrid {...this.props} limit="5" />
            </div>
            <div className="four wide column">
              <a href="#">
                <h4>Watchlist</h4>
              </a>
              <a href="#">
                <h4>Continue Watching</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

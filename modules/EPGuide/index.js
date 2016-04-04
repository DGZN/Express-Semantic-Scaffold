import React       from 'react'
import Channels from './Channels'
import Filter from './Filter'
import Schedule from './Schedule'
import MobileSchedule from './MobileSchedule'

export default React.createClass({
  render() {
    return (
      <div>
        <Channels />
        <div className="ui vertical center container aligned grids">
          <div className="ui schedule grid container details pad-top-medium">
            <Filter />
            <Schedule />
            <MobileSchedule />
          </div>
        </div>
      </div>
    );
  }
});

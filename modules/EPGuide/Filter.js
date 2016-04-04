import React       from 'react'

export default React.createClass({
  render() {
    return (
      <div className="two wide filter schedule-filter computer only column">
        <h4>TUE, MAY 23</h4>
        <div id="schedule-filter-dropdown" className="ui simple dropdown item inverted">5pm<i className="plus icon"></i>
          <div className="menu">
            <a className="item">1pm</a>
            <a className="item">1:30</a>
            <a className="item">2pm</a>
            <a className="item">2:30</a>
            <a className="item">3pm</a>
            <a className="item">3:30</a>
            <a className="item">4pm</a>
            <a className="item">4:30</a>
            <a className="item">5pm</a>
            <a className="item">5:30</a>
            <a className="item">6pm</a>
            <a className="item">6:30</a>
            <a className="item">7pm</a>
            <a className="item">7:30</a>
            <a className="item">8pm</a>
            <a className="item">8:30</a>
            <a className="item">9pm</a>
            <a className="item">9:30</a>
            <a className="item">10pm</a>
            <a className="item">10:30</a>
            <a className="item">11pm</a>
            <a className="item">11:30</a>
            <a className="item">Noon</a>
            <a className="item">12:30</a>
            <a className="item">1pm</a>
            <a className="item">1:30</a>
            <a className="item">2pm</a>
            <a className="item">2:30</a>
            <a className="item">3pm</a>
            <a className="item">3:30</a>
            <a className="item">4pm</a>
            <a className="item">4:30</a>
            <a className="item">5</a>
            <a className="item">5:30</a>
            <a className="item">6pm</a>
            <a className="item">6:30</a>
            <a className="item">7pm</a>
            <a className="item">7:30</a>
            <a className="item">8pm</a>
            <a className="item">8:30</a>
            <a className="item">9pm</a>
            <a className="item">9:30</a>
            <a className="item">10pm</a>
            <a className="item">10:30</a>
            <a className="item">11pm</a>
            <a className="item">11:30</a>
            <a className="item">Midnight</a>
            <a className="item">12:30</a>
          </div>
        </div>
        <div className="ui icon input inverted">
          <input type="text" placeholder="Search..." className="prompt"/><i className="search link icon"></i>
        </div>
        <div className="results"></div>
      </div>
    );
  }
});

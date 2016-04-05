import React       from 'react'

export default React.createClass({
  getInitialState() {
    return {
      ampm: 'pm'
    , startTime: '5'
    }
  },
  render() {
    // var startTime = this.state.startTime
    // var ampm = this.state.ampm
    // var count = 0;
    // var increment = 0;
    // var TIMES = ['<tr ><th ><span className="left-arrow">&#706;</span>']
    // TimeList.filter((time, i) => {
    //   if (time == startTime + ampm) {
    //     increment = 1;
    //   }
    //   if (increment && count <= 5) {
    //     if (time.indexOf('pm'))
    //       ampm = 'pm'
    //     var time = time.replace(/am|pm/g,'')
    //     count++;
    //     if (time.indexOf(':')==-1) {
    //       TIMES.push('<th>' + time + '<sub>' + ampm + '</sub></th>')
    //     } else {
    //       var times = time.split(':')
    //       TIMES.push('<th>' + times[0] + '<sub class="medium">&#58;' + times[1] + '</sub></th>')
    //     }
    //   }
    // })
    // TIMES.push('<th><span class="right-arrow">&#707;</span></th></th></tr>')
    // TIMES = TIMES.filter((n) => true);
    // console.log("times", TIMES)
    var self = this;
    setTimeout(function(){
      $('.right-arrow').off()
      $('.right-arrow').on('click', function(){
        console.log("i was clicked!!!!!")
        var time = parseInt(self.state.startTime)
        if (time < 11)
          self.setState({
            startTime: parseInt(time) + 1
          }, function(){
            console.log("changed start time", self.state.startTime)
          })
      })
      $('.left-arrow').off()
      $('.left-arrow').on('click', function(){
        console.log("i was clicked!!!!!")
        var time = parseInt(self.state.startTime)
        if (time > 1)
          self.setState({
            startTime: parseInt(time) - 1
          }, function(){
            console.log("changed start time", self.state.startTime)
          })
      })
    },800)
    return (
      <thead>
        <tr >
          <th>
            <span className="left-arrow">&#706;</span>
          </th>
          <th>
            5<sub class="medium">pm</sub>
          </th>
          <th>
            5<sub class="medium">&#58;30</sub>
          </th>
          <th>
            6<sub class="medium">pm</sub>
          </th>
          <th>
            6<sub class="medium">&#58;30</sub>
          </th>
          <th>
            7<sub class="medium">pm</sub>
          </th>
          <th>
            7<sub class="medium">&#58;30</sub>
          </th>
          <th>
            8<sub class="medium">pm</sub>
          </th>
          <th>
            <span class="right-arrow">&#707;</span>
          </th>
        </tr>
      </thead>
    );
  }
});

/*
    <tr ><th ><span className="left-arrow">&#706;</span>
    <th>' + times[0] + '<sub class="medium">&#58;' + times[1] + '</sub></th>
    <th>' + times[0] + '<sub class="medium">&#58;' + times[1] + '</sub></th>
    <th><span class="right-arrow">&#707;</span></th></th></tr>
*/

const TimeList = ['1am','1:30','2am','2:30','3am','3:30','4am','4:30','5am','5:30','6am','6:30','7am','7:30','8am','8:30','9am','9:30','10am','10:30','11am','11:30','Noon','1pm','1:30','2pm','2:30','3pm','3:30','4pm','4:30','5pm','5:30','6pm','7:30','7pm','8:30','8pm','9:30','9pm','9:30','10pm','10:30','11pm','11:30','Midnight']

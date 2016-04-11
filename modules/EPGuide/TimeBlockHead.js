import React       from 'react'

export default React.createClass({
  getInitialState() {
    return {
      ampm: 'pm'
    , cue: 33
    }
  },
  render() {
    var self = this;
    setTimeout(function(){
      $('.right-arrow').off()
      $('.right-arrow').on('click', function(){
        var time = parseInt(self.state.cue)
        if (time >= 48)
          time = -1
          self.setState({
            cue: parseInt(time) + 1
          })
      })
      $('.left-arrow').off()
      $('.left-arrow').on('click', function(){
        var time = parseInt(self.state.cue)
        if (time <= -1)
          time = 0;
        self.setState({
          cue: parseInt(time) - 1
        })
      })
    },800)
    var cues = TimeList;
    var index = (self.state.cue-1)
    var CUEPOINTS = []
    cues.some((cue, i) => {
      if (i >= (index + 8))
        return false;
      if (i >= index) {
        if (cue.indexOf(':')>=0) {
          var time = cue.split(':')
          CUEPOINTS.push(<th>
            {time[0]}<sub className="medium">&#58;30</sub>
            </th>)
          } else {
            if (cue.indexOf('am')>=0) {
              var time = cue.split('am')
            }
            if (cue.indexOf('pm')>=0) {
              var time = cue.split('pm')
            }
            CUEPOINTS.push(<th>
              {time[0]}<sub className="medium">{cue.replace(time[0], '')}</sub>
              </th>)
            }
      }
    })
    console.log("cuepoints", CUEPOINTS);
    return (
      <thead>
        <tr >
          <th>
            <span className="left-arrow">&#706;</span>
          </th>
          {CUEPOINTS}
          <th>
            <span className="right-arrow">&#707;</span>
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

    /// -- Working ---

    <th>
      {cues[0]}<sub className="medium">pm</sub>
    </th>
    <th>
      {cues[1]}<sub className="medium">&#58;30</sub>
    </th>
    <th>
      {cues[2]}<sub className="medium">pm</sub>
    </th>
    <th>
      {cues[3]}<sub className="medium">&#58;30</sub>
    </th>
    <th>
      {cues[4]}<sub className="medium">pm</sub>
    </th>
    <th>
      {cues[5]}<sub className="medium">&#58;30</sub>
    </th>
    <th>
      {cues[6]}<sub className="medium">pm</sub>
    </th>

*/

const TimeList = ['1am','1:30','2am','2:30','3am','3:30','4am','4:30','5am','5:30','6am','6:30','7am','7:30','8am','8:30','9am','9:30','10am','10:30','11am','11:30','12', '12:30', '1pm','1:30','2pm','2:30','3pm','3:30','4pm','4:30','5pm','5:30','6pm', '6:30', '7pm','7:30','8pm','8:30','9pm','9:30','10pm','10:30','11pm','11:30','12']

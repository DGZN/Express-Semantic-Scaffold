import React from 'react'

import People from './People'

export default React.createClass({

  getInitialState: function() {
    return {
      roles: []
    };
  },

  componentWillReceiveProps: function(props) {
    this.setState({
      roles: props['roles'] || []
    , people: []
    })
  },

  render() {
    var PEOPLE = this.state.people;
    if (this.state.roles) {
      var PEOPLE = []
      for (var role in this.state.roles) {
        PEOPLE.push(<People key={role} title={role} people={this.state.roles[role]} language={this.props.language} {...this.props} />)
      }
    }
    return (
      <div className="ui three column grid container stackable">
        {PEOPLE}
      </div>
    );
  }
});

const React = require('react');

const Person = require('./person.js')


const People = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title
    , people: this.props.people || []
    };
  },

  render() {
    var people = []
    this.state.people.map((person, i) => {
      people.push(<Person key={i} name={person.meta[this.props.language]["first_name"] + ' ' + person.meta[this.props.language]["last_name"]} />)
    })
    return (
      <div className="cast three wide computer five wide tablet column tight">
        <div className="ui top attached label detailHeading">{this.state.title}</div>
        <div className="ui grid">
          <div className="row">
            <div className="pad-top-medium column tight">
              <ul className="meta tight">
                {people}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

function getChararcters(){
  return (<div className="pad-top-medium column tight">
            <ul className="meta tight">
              <li>Alex</li>
              <li>Noma</li>
              <li>Alex</li>
              <li>Noma</li>
            </ul>
          </div>);
}

module.exports = People;

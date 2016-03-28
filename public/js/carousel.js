const React = require('react');
const Row = require('./row.js')

const Carousel = React.createClass({
  render() {
    return (
      <div>
        <div className="ui one column grid container">
         <div className="column header">
            <a href={'/'+this.props.title}>
              <h4 className="ui header grid-title"><br/>{this.props.title} &gt;</h4>
            </a>
         </div>
        </div>
        <div className="ui equal width grid container">
          <Row {...this.props} />
        </div>
      </div>
    );
  }
});

module.exports = Carousel;

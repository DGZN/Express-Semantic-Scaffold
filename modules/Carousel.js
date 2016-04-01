import React from 'react'
import Row from './Row'

import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <div className="ui one column grid container">
         <div className="column header">
            <Link to={'/'+this.props.title.toLowerCase()} className="item">
              <h4 className="ui header grid-title"><br/>{this.props.title} &gt;</h4>
            </Link>
         </div>
        </div>
        <div className="ui equal width grid container">
          <Row {...this.props} />
        </div>
      </div>
    );
  }
});

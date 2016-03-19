const React = require('react');

const SimilarTitles = React.createClass({
  render() {
    return (
      <div className="ui vertical center container details grids">
        <div className="ui one column grid container">
          <div className="column header">
            <h4 className="ui header grid-title"><br />Similar Titles</h4>
          </div>
        </div>
        <div className="ui equal width grid container bottom-padding">
          <div className="row"><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a></div>
          <div className="row"><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a><a className="image preview">
              <div className="image preview">
                <div className="ui bottom attached label">Khally Balak Men Geranak</div>
              </div></a></div>
        </div>
      </div>
    );
  }
});

module.exports = SimilarTitles;

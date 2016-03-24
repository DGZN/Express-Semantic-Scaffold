const React = require('react');

const Nav = React.createClass({

  render() {
    var menu = languageMenu(this.props.language)
    return (
      <div>
        <div className="ui large top fixed hidden menu inverted">
          <div className="sidebar"></div>
          <div className="ui container nav"><a href="/" className="item"><img src="/images/melody-logo.png" className="ui tiny image"/></a><a href="/movies" className="item">Movies</a><a href="/series" className="item">Series</a><a href="/music" className="item">Music</a><a href="/plays" className="item">Plays</a><a className="item">Classics</a><a className="item">Collections</a><a href="/live" className="item">Live TV</a>
            <div className="ui category search item nav-search">
              <div className="ui transparent icon input">
                <input type="text" placeholder="Search..." className="prompt"/><i className="search link icon"></i>
              </div>
              <div className="results"></div>
            </div>
            <div className="right menu">
              <div id="account-dropdown" className="ui left dropdown item"><i className="setting icon"></i>
                <div className="menu">
                  <a className="item" onClick={this.myAccount}>
                    <i className="user icon"></i>
                    <span className="text">My Account</span>
                  </a>
                  <a className="item" onClick={this.myWatchlist}>
                    <i className="list layout icon"></i>
                    <span className="text">Watchlist</span>
                  </a>
                  <a className="item" onClick={this.props.setLanguage.bind(null, menu.lang)}>
                    <i className="flag icon"></i>
                    <span className="text">{menu.name}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav-sidebar" className="ui right vertical sidebar menu"> <a href="/" className="item">Home</a><a href="/movies" className="item">Movies</a><a href="/series" className="item">Series</a><a href="/music" className="item">Music</a><a href="/plays" className="item">Plays</a><a className="item">Classics</a><a className="item">Collections</a><a href="/live" className="item">Live TV</a>
          <div className="ui category search item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." className="prompt"/><i className="search link icon"></i>
            </div>
            <div className="results"></div>
          </div><a className="item horizontal divider"></a>
            <a className="item" onClick={this.handleClick} >
              <h6>My Account</h6></a><a className="item">
              <h6>Watchlist</h6></a><a className="sidebar item">
              <h6 >Arabic</h6>
            </a>
        </div>
        <div className="ui inverted vertical masthead center aligned">
          <div className="ui container nav-header pad-bottom-tiny">
            <div className="ui large secondary inverted pointing menu"><a className="toc item right aligned"><i className="sidebar icon"></i></a></div>
          </div>
        </div>
      </div>
    );
  },

  myAccount() {
    $('.my-account.modal').modal('show');
  },

  myWatchlist() {
    $('.my-watchlist.modal').modal('show');
  }

});

var languageMenu = function(lang){
  switch (lang) {
    case 'ar':
      return {
        name: 'English'
      , lang: 'en'
      }
      break;
    default:
      return {
        name: 'Arabic'
      , lang: 'ar'
      }
  }
}

module.exports = Nav;

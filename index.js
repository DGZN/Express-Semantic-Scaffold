import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import appHistory from './app_history'

import App from './modules/App'
import Home from './modules/Home'
import Logout from './modules/Logout'
import Music from './modules/Music'
import Album from './modules/Album'
import Movie from './modules/Movie'
import Plays from './modules/Plays'
import Play from './modules/Play'
import Classics from './modules/Classics'
import Classic from './modules/Classic'
import Movies from './modules/Movies'
import Series from './modules/Series'
import Season from './modules/Season'
import Collections from './modules/Collections'
import Collection from './modules/Collection'
import LiveTV from './modules/LiveTV'
import Watchlist from './modules/Watchlist'

render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/watchlist" component={Watchlist} />
      <Route path="/movies" component={Movies} />
      <Route path="/movies/:id" component={Movie} />
      <Route path="/series" component={Series} />
      <Route path="/series/:id" component={Season} />
      <Route path="/music" component={Music} />
      <Route path="/albums/:id" component={Album} />
      <Route path="/plays" component={Plays} />
      <Route path="/plays/:id" component={Play} />
      <Route path="/classics" component={Classics} />
      <Route path="/classics/:id" component={Classic} />
      <Route path="/collections" component={Collections} />
      <Route path="/collections/:id" component={Collection} />
      <Route path="/livetv" component={LiveTV} />
      <Route path="/logout" component={App} />
    </Route>
  </Router>
), document.getElementById('app'))

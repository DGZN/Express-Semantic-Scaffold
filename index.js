import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import Music from './modules/Music'
import Movie from './modules/Movie'
import Plays from './modules/Plays'
import Movies from './modules/Movies'
import Series from './modules/Series'
import Season from './modules/Season'
import Collections from './modules/Collections'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} language="123" >
      <Route path="/movies" component={Movies} />
      <Route path="/movies/:id" component={Movie} />
      <Route path="/series" component={Series} />
      <Route path="/series/:id" component={Season} />
      <Route path="/music" component={Music} />
      <Route path="/plays" component={Plays} />
      <Route path="/collections" component={Collections} />
    </Route>
  </Router>
), document.getElementById('app'))

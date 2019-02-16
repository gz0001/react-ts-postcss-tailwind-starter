import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>,
    div
  )
})

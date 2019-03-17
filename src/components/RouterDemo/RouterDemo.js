import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'

const RouterDemo = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact component={Home} />
      </Switch>
    </Router>
  )
}

export default RouterDemo

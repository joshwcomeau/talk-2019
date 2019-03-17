import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Home = () => {
  return <div>Hello World</div>
}
const About = () => {
  return <div>About this Page</div>
}

const RouterDemo = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default RouterDemo

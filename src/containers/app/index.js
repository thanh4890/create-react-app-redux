import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// @see https://medium.com/@ivanmontiel/changing-old-habits-in-react-router-4-8483ee5e087c
const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const App = (props) => (
  <Router>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>

      {props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default App

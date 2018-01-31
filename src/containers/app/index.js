import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const App = (props) => (
  <Router>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/bus">Bus</Link>
        <Link to="/cart">cart</Link>
      </header>

      {props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default App

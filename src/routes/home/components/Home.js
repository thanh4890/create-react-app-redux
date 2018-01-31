import React from 'react'
import classes from './Home.scss'

const Home = props => (
  <div className={classes.home}>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p className={classes.firstP}>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

export default Home

import React from 'react'
import HomeRoute from './home'

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

export default [
  HomeRoute,
  {
    path: '/bus',
    component: Bus
  },
  {
    path: '/cart',
    component: Cart
  }
]

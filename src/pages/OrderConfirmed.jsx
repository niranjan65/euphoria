import React from 'react'
import order from "../images/order-confirmed.png"
import { Link } from 'react-router-dom'

const OrderConfirmed = () => {
  return (
    <div className='container mx-auto  flex items-center justify-center'>
      <Link to="/">
       <img src={order} alt="" />
      </Link>
    </div>
  )
}

export default OrderConfirmed

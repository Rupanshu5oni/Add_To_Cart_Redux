import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";

const AddToCart = () => {

    const cartSelector = useSelector(
      (state) => state.counter.items
    );

  return (

    <Link to="/cart">

      <div className="cart">

        {/* CART ICON */}

        <FaShoppingCart className="cart-icon" />

        {/* CART COUNT */}

        <span className="cart-count">

          {
            cartSelector.length
            ? cartSelector.length
            : 0
          }

        </span>

      </div>

    </Link>

  )
}

export default AddToCart
import React from 'react'

import {
  useDispatch,
  useSelector
} from 'react-redux'

import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart
} from '../../features/counterSlice'

import '../css/cart.css'

const CartList = () => {

  const dispatch = useDispatch()

  const items = useSelector(
    (state) => state.counter.items
  )

  /* Total */

  const totalPrice = items.reduce(

    (total, item) =>

      total + (item.price * item.quantity),

    0

  )

 return (

  <div className="cart-page">

    <div className="cart-container">

      {/* LEFT */}

      <div className="cart-left-section">

        <div className="cart-header">

          <h1>Shopping Cart</h1>

          <span>
            Price
          </span>

        </div>

        {
          items.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              {/* LEFT */}

              <div className="cart-left">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                />

                <div className="cart-info">

                  <h2>{item.title}</h2>

                  <p>In Stock</p>

                  <h3>
                    $
                    {(item.price * item.quantity).toFixed(2)}
                  </h3>

                </div>

              </div>

              {/* RIGHT */}

              <div className="cart-right">

                <div className="qty-box">

                  <button
                    onClick={() => {
                      dispatch(decreaseQty(item))
                    }}
                  >
                    -
                  </button>

                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                  />

                  <button
                    onClick={() => {
                      dispatch(increaseQty(item))
                    }}
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn1"
                  onClick={() => {
                    dispatch(removeItem(item))
                  }}
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

      {/* RIGHT SUBTOTAL */}

      <div className="cart-right-section">

        <div className="subtotal-box">

          <h2>

            Subtotal
            ({items.length} items):

            <span>
              ${totalPrice.toFixed(2)}
            </span>

          </h2>

          <button className="buy-btn"
                  onClick={() => {
                       dispatch(clearCart())
                    }}>

            Proceed to Buy

          </button>

        </div>

      </div>

    </div>

  </div>

)
}

export default CartList
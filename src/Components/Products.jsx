import React, { useEffect } from 'react'
import '../css/Product.css'

import { useDispatch, useSelector } from 'react-redux'

import { addItem, removeItem } from '../../features/counterSlice'

import { fetchProducts } from '../../features/productSlice'

const Products = () => {

  const dispatch = useDispatch()

  /* PRODUCTS + CATEGORY */

  const { items, category } = useSelector(
    (state) => state.products
  );

  /* CART */

  const cartSelector = useSelector(
    (state) => state.counter.items
  );

  /* FETCH PRODUCTS */

  useEffect(() => {

    dispatch(fetchProducts(category))

  }, [category])

  return (

    <div className="products">

      {

        items.map((product) => (

          <div
            className="amazon-card"
            key={product.id}
          >

            {/* IMAGE */}

            <div className="amazon-image">

              <img
                src={product.thumbnail}
                alt={product.title}
              />

            </div>

            {/* COLORS */}

            <div className="color-row">

              <span className="color black"></span>
              <span className="color gray"></span>
              <span className="color white"></span>
              <span className="color red"></span>

            </div>

            {/* TITLE */}

            <h3 className="product-title">
              {product.title}
            </h3>

            {/* RATING */}

            <div className="rating">

              ⭐⭐⭐⭐☆

              <span>
                ({product.rating})
              </span>

            </div>

            {/* PRICE */}

            <div className="price-section">

              <span className="main-price">
                ${product.price}
              </span>

              <span className="mrp">
                $999
              </span>

              <span className="discount">

                {Math.round(
                  product.discountPercentage
                )}% off

              </span>

            </div>

            {/* DELIVERY */}

            <p className="delivery">

              FREE delivery Tomorrow

            </p>

            {/* BUTTON */}

            {

              cartSelector.find(

                (cartItem) =>
                  cartItem.id === product.id

              )

                ?

                <button

                  className="cart-btn remove-btn"

                  onClick={() => {

                    dispatch(removeItem(product))

                  }}

                >

                  Remove From Cart

                </button>

                :

                <button

                  className="cart-btn"

                  onClick={() => {

                    dispatch(addItem(product))

                  }}

                >

                  Add to Cart

                </button>

            }

          </div>

        ))

      }

    </div>

  )
}

export default Products
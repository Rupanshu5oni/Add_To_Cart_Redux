import React, { useEffect } from "react";
import "../css/ProductsPage.css";

import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "../../features/counterSlice";

import { fetchProducts } from "../../features/productSlice";

const ProductsPage = () => {

  const dispatch = useDispatch();

  const { items, category } = useSelector(
     (state) => state.products
 );

  const cartSelector = useSelector(
    (state) => state.counter.items
  );

  useEffect(() => {

   dispatch(fetchProducts(category));

  }, [category]);

  return (

    <div className="horizontal-products">

      {

        items.map((product) => (

          <div
            className="horizontal-card"
            key={product.id}
          >

            {/* IMAGE */}

            <div className="horizontal-image">

              <img
                src={product.thumbnail}
                alt={product.title}
              />

            </div>

            {/* CONTENT */}

            <div className="horizontal-content">

              <h2>
                {product.title}
              </h2>

              <div className="rating">

                ⭐⭐⭐⭐☆
                <span>
                  ({product.rating})
                </span>

              </div>

              <div className="price-section">

                <span className="main-price">
                  ${product.price}
                </span>

                <span className="mrp">
                  $999
                </span>

                <span className="discount">
                  {Math.round(product.discountPercentage)}% off
                </span>

              </div>

              <p className="delivery">
                FREE delivery Tomorrow
              </p>

              <p className="description">
                {product.description}
              </p>

              {

                cartSelector.find(
                  (item) => item.id === product.id
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

          </div>

        ))

      }

    </div>

  );
};

export default ProductsPage;
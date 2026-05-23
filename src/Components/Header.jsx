import React from 'react'

import AddToCart from './AddToCart'

import '../App.css'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { setCategory } from '../../features/productSlice'

import {

  FaSearch,
  FaUserCircle,
  FaMapMarkerAlt,
  FaChevronDown

} from "react-icons/fa";

const Header = () => {

  const dispatch = useDispatch()

  return (

    <>

      {/* NAVBAR */}

      <header className="header">

        {/* LEFT */}

        <div className="header-left">

          {/* LOGO */}

          <div className="logo">

            <Link to="/">

              <span>My</span>Shop

            </Link>

          </div>

          {/* LOCATION */}

          <div className="location">

            <FaMapMarkerAlt />

            <span>Select Location</span>

          </div>

          {/* SEARCH */}

          <div className="search-bar">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search for Products, Brands and More"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="header-right">

          {/* NAV LINKS */}

          <nav>

            <ul className="nav-links">

              <li>

                <Link to="/">Home</Link>

              </li>

              <li>

                <Link to="/ProductsPage">

                  Products

                </Link>

              </li>

              <li>

                <Link to="/cart">

                  Cart

                </Link>

              </li>

            </ul>

          </nav>

          {/* LOGIN */}

          <div className="login">

            <FaUserCircle className='login-icon'/>

          </div>

          {/* CART */}

          <AddToCart />

        </div>

      </header>

      {/* CATEGORY SECTION */}

      <div className="categories">

        {/* LAPTOP */}

        <div
          className="category"

          onClick={() => {

            dispatch(setCategory("laptops"))

          }}
        >

          <img src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000" />

          <p>Laptop</p>

        </div>

        {/* MOBILES */}

        <div
          className="category"

          onClick={() => {

            dispatch(setCategory("smartphones"))

          }}
        >

          <img src="https://img.icons8.com/?size=100&id=5wGnhtHODuE9&format=png&color=000000" />

          <p>Mobiles</p>

        </div>

        {/* ELECTRONICS */}

        <div
          className="category"

          onClick={() => {

            dispatch(setCategory("mobile-accessories"))

          }}
        >

          <img src="https://cdn-icons-png.flaticon.com/128/3659/3659898.png" />

          <p>Electronics</p>

        </div>

        {/* TABLETS */}

        <div
          className="category"

          onClick={() => {

            dispatch(setCategory("tablets"))

          }}
        >

          <img src="https://img.icons8.com/?size=100&id=QDKWOFlWO3He&format=png&color=000000" />

          <p>Tablet</p>

        </div>

        {/* HEADPHONES */}

        <div
          className="category"

          onClick={() => {

            dispatch(setCategory("mobile-accessories"))

          }}
        >

          <img src="https://img.icons8.com/?size=100&id=N06cr99JrdGK&format=png&color=000000" />

          <p>Headphones</p>

        </div>

      </div>

    </>

  )
}

export default Header
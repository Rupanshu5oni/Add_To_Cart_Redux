import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Product from "./Components/Products";
import CartList from "./Pages/CartList";
import Footer from "./Components/Footer";
import ProductsPage from "./Pages/ProductsPage";

const App = () => {
  return (
    <>
      <Header />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Product />
            </>
          }
        />

         <Route
          path="/ProductsPage"
          element={<ProductsPage />}
        />

        {/* CART PAGE */}
        <Route
          path="/cart"
          element={<CartList />}
        />



      </Routes>
      <Footer />
    </>
  );
};

export default App;
import React, { useEffect, useState } from "react";
import "../css/Hero.css";

const Hero = () => {

  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {

    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products.slice(0, 5));
      });

  }, []);

  useEffect(() => {

  if(products.length === 0) return;

  const interval = setInterval(() => {

    setCurrent((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );

  }, 3000);

  return () => clearInterval(interval);

}, [products]);

  return (

    <div className="hero-section">

      <div
        className="hero-slider"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >

        {products.map((item) => (

          <div className="hero-slide" key={item.id}>

            {/* LEFT CONTENT */}

            <div className="hero-left">

              <span className="hero-tag">
                Back To Campus
              </span>

              <h1>{item.title}</h1>

              <h2>
                From ${item.price}
              </h2>

              <p>
                {item.description}
              </p>

              <button>
                Shop Now
              </button>

            </div>

            {/* RIGHT IMAGE */}

            <div className="hero-right">

              <img
                src={item.thumbnail}
                alt={item.title}
              />

            </div>

          </div>

        ))}

      </div>

      {/* DOTS */}

      <div className="hero-dots">

        {products.map((_, index) => (

          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

    </div>

  );
};

export default Hero;
import React from "react";
import "../css/Footer.css";

const Footer = () => {

  return (

    <footer className="footer">

      {/* TOP */}

      <div className="footer-top">

        <p>
          Back to top
        </p>

      </div>

      {/* MAIN */}

      <div className="footer-main">

        <div className="footer-column">

          <h3>Get to Know Us</h3>

          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
          <a href="#">Amazon Science</a>

        </div>

        <div className="footer-column">

          <h3>Connect with Us</h3>

          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>

        </div>

        <div className="footer-column">

          <h3>Make Money with Us</h3>

          <a href="#">Sell on MyShop</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Advertise Products</a>
          <a href="#">Become a Seller</a>

        </div>

        <div className="footer-column">

          <h3>Let Us Help You</h3>

          <a href="#">Your Account</a>
          <a href="#">Returns Centre</a>
          <a href="#">Help</a>
          <a href="#">100% Purchase Protection</a>

        </div>

      </div>

      {/* MIDDLE */}

      <div className="footer-middle">

        <div className="footer-logo">
          MyShop
        </div>

        <div className="footer-options">

          <button>
            🌐 English
          </button>

          <button>
            🇮🇳 India
          </button>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="bottom-item">
          <h4>MyShop Web Services</h4>
          <p>Cloud Hosting</p>
        </div>

        <div className="bottom-item">
          <h4>Shop Music</h4>
          <p>Download Songs</p>
        </div>

        <div className="bottom-item">
          <h4>IMDb Clone</h4>
          <p>Movies & TV</p>
        </div>

        <div className="bottom-item">
          <h4>MyShop Business</h4>
          <p>Everything Store</p>
        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="copyright">

        © 2026 MyShop.com

      </div>

    </footer>

  );
};

export default Footer;
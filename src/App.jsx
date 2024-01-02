import { useState } from "react";
import "../public/stylesheet/Header.css";
import "../public/stylesheet/Image.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsList } from "react-icons/bs";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <div className="Header">
        <div className="box-section">
          <div className="nav-container">
            <img src="/images/sneakers.svg" className="logo" />
            <div
              className={`mobile-nav-icon ${
                isMobileNavOpen ? "mobile-nav-open" : ""
              }`}
              onClick={toggleMobileNav}
            >
              <BsList />
            </div>
            <div className="div-links">
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="right-section">
            <div
              className={`cart-icon ${isCartOpen ? "active" : ""}`}
              onClick={toggleCart}
            >
              <img src="/images/cart.svg" className="cart" />
              {isCartOpen && (
                <div className="cart-list active">
                  <p className="card-title">Cart</p>
                  <div className="cart-line"></div>
                  <p className="cart-message center">Your cart is empty.</p>
                </div>
              )}
            </div>
            <img src="/images/oval.png" className="profile-picture" />
          </div>
        </div>
      </div>

      <div className="image-container">
        <img
          src="/images/Rectangle.png"
          alt="Big Image"
          className="big-image"
        />
        <div className="small-images">
          <img src="/images/Rectangle.png" alt="Small Image 1" />
          <img src="/images/Rectangle2.png" alt="Small Image 2" />
          <img src="/images/Rectangle3.png" alt="Small Image 3" />
          <img src="/images/Rectangle4.png" alt="Small Image 4" />
        </div>
      </div>
    </>
  );
}

export default App;

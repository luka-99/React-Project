import { useState } from "react";
import "../public/stylesheet/Header.css";
import "../public/stylesheet/Image.css";
import "../public/stylesheet/Text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsList } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../public/stylesheet/Slide.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const increaseNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decreaseNumber = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const addToCart = () => {
    setTotalPrice(number * 125);
    setIsCartOpen(true);
  };

  const properties = {
    prevArrow: (
      <button className="button-style">
        <img src="/images/LeftArrow.svg" />
      </button>
    ),
    nextArrow: (
      <button className="button-style">
        <img src="/images/RightArrow.svg" />
      </button>
    ),
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
                  {totalPrice > 0 && (
                    <p className="cart-totalPrice">Total: ${totalPrice}</p>
                  )}
                  {totalPrice === 0 && (
                    <p className="cart-message center">Your cart is empty.</p>
                  )}
                </div>
              )}
            </div>
            <img src="/images/oval.png" className="profile-picture" />
          </div>
        </div>
      </div>

      <div className="slideshow-container">
        <Slide {...properties}>
          <div className="slide-item">
            <img
              src="/images/Rectangle.png"
              alt="Big Image"
              className="big-image"
            />
          </div>
          <div className="slide-item">
            <img src="/images/Rectangle2.png" alt="Small Image 1" />
          </div>
          <div className="slide-item">
            <img src="/images/Rectangle3.png" alt="Small Image 2" />
          </div>
          <div className="slide-item">
            <img src="/images/Rectangle4.png" alt="Small Image 3" />
          </div>
        </Slide>
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

        <div className="text-container">
          <p className="sneaker-company">Sneaker Company</p>
          <p className="limited-edition">Fall Limited Edition Sneakers</p>
          <div className="rating-container">
            <div className="star-container">
              <FaStar className="star filled" />
              <FaStar className="star filled" />
              <FaStar className="star filled" />
              <FaStar className="star filled" />
              <FaStar className="star transparent-border" />
            </div>

            <p className="rating-text">4.2 out of 5</p>
          </div>
          <p className="sneaker-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p className="discounted-price">
            $125.00
            <p className="discount-percentage-border">
              <p className="discount-percentage">50%</p>
            </p>
          </p>
          <p className="price">$250.00</p>

          <div className="product-buttons">
            <div className="number-box">
              <button
                className="decrease-button bi bi-dash"
                onClick={decreaseNumber}
              ></button>
              <div className="number">{number}</div>
              <button
                className="increase-button bi bi-plus"
                onClick={increaseNumber}
              ></button>
            </div>

            <div className="add-button" onClick={addToCart}>
              <img src="/images/cart-2.svg" className="cart-button" />
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

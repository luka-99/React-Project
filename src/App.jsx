import { useState } from "react";
import "../public/stylesheet/Header.css";
import "../public/stylesheet/Image.css";
import "../public/stylesheet/Text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsList } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../public/stylesheet/Slide.css";
import imagesData from "../public/data/images.json";
import "../public/stylesheet/Cart.css";
import { BiTrash } from "react-icons/bi";
import "../public/stylesheet/Review.css";
import ReviewForm from "./ReviewForm";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedImage, setSelectedImage] = useState("/images/Rectangle.png");
  const [cartNumber, setCartNumber] = useState(0);

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

  const price = "125.00";

  const addToCart = () => {
    setTotalPrice(number * price);
    setIsCartOpen(true);
    setCartNumber(number);
  };

  const handleSmallImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const removeFromCart = () => {
    setTotalPrice(0);
    setNumber(0);
    setIsCartOpen(false);
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
                    <>
                      <p className="cart-totalPrice cart-color">
                        <img src={selectedImage} className="cart-image" />
                        <div className="cart-totalPrice-text">
                          <div>Fall Limited Edition Sneakers</div>${price} x{" "}
                          {cartNumber}
                          <span className="total-price">${totalPrice}</span>
                        </div>
                        <BiTrash
                          className="trash-icon"
                          onClick={removeFromCart}
                        />
                      </p>
                      <div className="checkout-button">Checkout</div>
                    </>
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
          {imagesData.map((image, index) => (
            <div className="slide-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slide>
      </div>

      <div className="image-container">
        <div className="image-wrapper">
          <img src={selectedImage} alt="Big Image" className="big-image" />
        </div>
        <div className="small-images">
          {imagesData.map((image, index) => (
            <div className="small-image-container" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => handleSmallImageClick(image.src)}
                className={selectedImage === image.src ? "blur" : ""}
              />
              <div
                className={`blur-overlay ${
                  selectedImage === image.src ? "active" : ""
                }`}
              ></div>
            </div>
          ))}
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
            ${price}
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

      <ReviewForm />
    </>
  );
}

export default App;

import { useState } from "react";
import "../public/stylesheet/Header.css";
import "../public/stylesheet/Image.css";
import "../public/stylesheet/Text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-slideshow-image/dist/styles.css";
import "../public/stylesheet/Slide.css";
import "../public/stylesheet/Cart.css";
import "../public/stylesheet/Review.css";
import "../public/stylesheet/ReviewForm.css";

import Header from "./Header";
import Slideshow from "./Slideshow";
import ImageContainer from "./ImageContainer";
import ProductButtons from "./ProductButtons";
import ReviewFormContainer from "./Review/ReviewFormContainer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const [selectedImage, setSelectedImage] = useState("/images/Rectangle.png");
  const [totalPrice, setTotalPrice] = useState(0);
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
      <Header
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        price={price}
        isMobileNavOpen={isMobileNavOpen}
        toggleMobileNav={toggleMobileNav}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
        cartNumber={cartNumber}
      />

      <Slideshow properties={properties} />

      <div className="image-container">
        <ImageContainer
          selectedImage={selectedImage}
          handleSmallImageClick={handleSmallImageClick}
        />
        <div className="text-container">
          <ProductButtons
            number={number}
            decreaseNumber={decreaseNumber}
            increaseNumber={increaseNumber}
            addToCart={addToCart}
          />
        </div>
      </div>
      <ReviewFormContainer />
    </>
  );
}

export default App;

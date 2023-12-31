import { useState } from "react";
import "../public/stylesheet/Header.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="Header">
        <div className="box-section">
          <div className="nav-container">
            <img src="/images/sneakers.svg" className="logo" />
            <div className="div-links">
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="right-section">
            <div className="cart-icon">
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
            </div>
            <img src="/images/oval.png" className="profile-picture" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

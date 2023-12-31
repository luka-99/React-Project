// import { useState } from 'react';
import "../public/stylesheet/Header.css";

function App() {
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
              <img src="/images/cart.svg" className="cart" />
            </div>
            <img src="/images/oval.png" className="profile-picture" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

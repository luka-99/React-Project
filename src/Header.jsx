import PropTypes from "prop-types";
import { BsList } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

function Header({
  isMobileNavOpen,
  toggleMobileNav,
  isCartOpen,
  toggleCart,
  price,
  totalPrice,
  cartNumber,
  removeFromCart,
}) {
  return (
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
                      <img src="/images/Rectangle.png" className="cart-image" />
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
  );
}

Header.propTypes = {
  isMobileNavOpen: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  cartNumber: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
};

export default Header;

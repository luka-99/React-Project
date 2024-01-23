import PropTypes from "prop-types";

function ProductButtons({ number, decreaseNumber, increaseNumber, addToCart }) {
  return (
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
  );
}

ProductButtons.propTypes = {
  number: PropTypes.number.isRequired,
  decreaseNumber: PropTypes.func.isRequired,
  increaseNumber: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductButtons;

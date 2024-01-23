import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import imagesData from "../public/data/images.json";

function ImageContainer({ selectedImage, handleSmallImageClick }) {
  return (
    <>
      <div className="image-wrapper">
        <img src={selectedImage} className="big-image" />
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
          $125.00
          <p className="discount-percentage-border">
            <p className="discount-percentage">50%</p>
          </p>
        </p>
        <p className="price">$250.00</p>
      </div>
    </>
  );
}

ImageContainer.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  handleSmallImageClick: PropTypes.func.isRequired,
};

export default ImageContainer;

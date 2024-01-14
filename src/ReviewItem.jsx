import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const ReviewItem = ({
  reviewerName,
  starRating,
  reviewTitle,
  reviewDescription,
}) => (
  <div className="review-item">
    <img src="../public/images/profile.png" alt="" />
    <div className="review-details">
      <div className="reviewer-name">{reviewerName}</div>
      <div className="star-rating">
        {[...Array(starRating)].map((_, index) => (
          <FaStar key={index} className="star filled" />
        ))}
        {[...Array(5 - starRating)].map((_, index) => (
          <FaStar key={index} className="star transparent-border" />
        ))}
      </div>
      <div className="review-title">{reviewTitle}</div>
      <div className="review-description">{reviewDescription}</div>
    </div>
  </div>
);

ReviewItem.propTypes = {
  reviewerName: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  reviewTitle: PropTypes.string.isRequired,
  reviewDescription: PropTypes.string.isRequired,
};

export default ReviewItem;

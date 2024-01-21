import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const ReviewItem = ({
  reviewerName,
  starRating,
  reviewTitle,
  reviewDescription,
  isNew,
  onDelete,
  onEdit,
}) => (
  <div className="review-item">
    <img src="../public/images/profile.png" alt="Profile" />
    <div className="review-details">
      {isNew && (
        <div className="Buttons-container">
          <button className="Delete" onClick={onDelete}>
            Delete
          </button>
          <button className="Edit" onClick={onEdit}>
            Edit
          </button>
        </div>
      )}
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
  isNew: PropTypes.bool,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ReviewItem;

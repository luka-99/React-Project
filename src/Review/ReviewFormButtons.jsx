import PropTypes from "prop-types";

const ReviewFormButtons = ({ handleFormToggle }) => {
  return (
    <div className="form-buttons">
      <button
        className="Cancel"
        type="button"
        onClick={() => handleFormToggle(false)}
      >
        Cancel
      </button>
      <button type="submit" className="Add">
        Add
      </button>
    </div>
  );
};

ReviewFormButtons.propTypes = {
  handleFormToggle: PropTypes.func.isRequired,
};

export default ReviewFormButtons;

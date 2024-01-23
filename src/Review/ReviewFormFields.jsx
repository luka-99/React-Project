import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import { FaStar } from "react-icons/fa";

const ReviewFormFields = ({
  values,
  setFieldValue,
  setFieldError,
  starValues,
}) => {
  return (
    <>
      <div className="form-field">
        <label className="title-rating">Overall Rating</label>
        <div className="star-buttons">
          {starValues.map((value, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setFieldValue("starRating", value);
                setFieldError("starRating", "");
              }}
            >
              <FaStar
                className={
                  value <= values.starRating
                    ? "star filled"
                    : "star transparent-border"
                }
              />
            </button>
          ))}
        </div>
        <ErrorMessage
          name="starRating"
          render={(errorMessage) => (
            <div className="error">
              {values.starRating === null && errorMessage}
            </div>
          )}
        />
      </div>

      <div className="form-field">
        <label className="title">Reviewer Name</label>
        <Field
          maxLength={20}
          type="text"
          name="reviewerName"
          placeholder="Enter your name (optional)"
        />
        <ErrorMessage name="reviewerName" component="div" className="error" />
      </div>

      <div className="form-field">
        <label className="title">Headline</label>
        <Field
          type="text"
          name="reviewTitle"
          placeholder="What’s most important to know?"
        />
        <ErrorMessage name="reviewTitle" component="div" className="error" />
      </div>

      <div className="form-field">
        <label className="title">Written review</label>
        <Field
          as="textarea"
          name="reviewDescription"
          placeholder="What did you like or dislike? What did you use this product for?"
        />
        <ErrorMessage
          name="reviewDescription"
          component="div"
          className="error"
        />
      </div>
    </>
  );
};

ReviewFormFields.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  starValues: PropTypes.array.isRequired,
};

export default ReviewFormFields;

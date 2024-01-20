import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReviewItem from "./ReviewItem";
import { FaStar } from "react-icons/fa";
import reviewsData from "../public/data/review.json";
import "../public/stylesheet/Header.css";
import "../public/stylesheet/Image.css";
import "../public/stylesheet/Text.css";
import "bootstrap/dist/css/bootstrap.min.css";

const validationSchema = Yup.object({
  starRating: Yup.number().required("Please select a star rating"),
  reviewTitle: Yup.string()
    .min(4, "Title must be at least 4 characters")
    .required("Please enter your review title"),
  reviewDescription: Yup.string()
    .min(15, "Review must be at least 15 characters")
    .required("Please enter your written review"),
  reviewerName: Yup.string(),
});

const starValues = [1, 2, 3, 4, 5];

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [reviews, setReviews] = useState(reviewsData);
  const [showText, setShowText] = useState(false);

  const handleFormToggle = (show, review = null) => {
    setShowForm(show);
    setSelectedReview(review);
  };

  const handleFormSubmit = (values) => {
    const updatedValues = {
      ...values,
      reviewerName: values.reviewerName || "Default Name",
    };
    const updatedReviews = selectedReview
      ? reviews.map((review) =>
          review === selectedReview ? { ...review, ...updatedValues } : review
        )
      : [{ ...updatedValues, isNew: true }, ...reviews];

    setReviews(updatedReviews);
    handleFormToggle(false);
  };

  const handleDeleteReview = (reviewToDelete) => {
    const updatedReviews = reviews.filter(
      (review) => review !== reviewToDelete
    );
    setReviews(updatedReviews);
  };

  
  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth < 401);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div>
      <div className="reviews-container">
        <div className="section-title">
          {showForm ? "Add a review" : "Customer reviews"}
          {!showForm && (
            <div className="button-container">
              <button
                className={`review-button${
                  reviews.filter((review) => review.isNew).length > 0
                    ? " disabled"
                    : ""
                }`}
                onClick={() => handleFormToggle(true)}
                disabled={reviews.filter((review) => review.isNew).length > 0}
              >
                {showText ? "Add" : "Write a review"}
              </button>
            </div>
          )}
        </div>

        {!showForm &&
          reviews.map((review, index) => (
            <div key={index}>
              <ReviewItem
                {...review}
                isNew={review.isNew}
                onDelete={() => handleDeleteReview(review)}
                onEdit={() => handleFormToggle(true, review)}
              />
            </div>
          ))}

        {showForm && (
          <Formik
            initialValues={{
              reviewerName: selectedReview?.reviewerName || "",
              starRating: selectedReview?.starRating || null,
              reviewTitle: selectedReview?.reviewTitle || "",
              reviewDescription: selectedReview?.reviewDescription || "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values, setFieldValue, setFieldError }) => (
              <Form>
                <div className="form-field">
                  <label>Reviewer Name (optional):</label>
                  <Field type="text" name="reviewerName" />
                  <ErrorMessage
                    name="reviewerName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-field">
                  <label>Select Star Rating:</label>
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
                  <label>Review Title:</label>
                  <Field type="text" name="reviewTitle" />
                  <ErrorMessage
                    name="reviewTitle"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-field">
                  <label>Written Review:</label>
                  <Field as="textarea" name="reviewDescription" />
                  <ErrorMessage
                    name="reviewDescription"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-buttons">
                  <button type="button" onClick={() => handleFormToggle(false)}>
                    Cancel
                  </button>
                  <button type="submit">Add</button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ReviewForm;

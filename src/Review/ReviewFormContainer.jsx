import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ReviewFormFields from "./ReviewFormFields";
import ReviewFormButtons from "./ReviewFormButtons";
import ReviewItem from "./ReviewItem";
import reviewsData from "../../public/data/review.json";

const validationSchema = Yup.object({
  starRating: Yup.number().required("Please select a star rating"),
  reviewTitle: Yup.string()
    .min(4, "Title must be at least 4 characters")
    .required("Please enter your headline"),
  reviewDescription: Yup.string()
    .min(15, "Review must be at least 15 characters")
    .required("Please enter your written review"),
  reviewerName: Yup.string(),
});

const starValues = [1, 2, 3, 4, 5];

const ReviewFormContainer = () => {
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
                <ReviewFormFields
                  values={values}
                  setFieldValue={setFieldValue}
                  setFieldError={setFieldError}
                  starValues={starValues}
                />
                <ReviewFormButtons
                  handleFormToggle={handleFormToggle}
                  showText={showText}
                />
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ReviewFormContainer;

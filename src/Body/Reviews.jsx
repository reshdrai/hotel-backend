import React, { useState } from 'react';

const Reviews = () => {
  const [showReviewBox, setShowReviewBox] = useState(false);

  const toggleReviewBox = () => {
    setShowReviewBox(!showReviewBox);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submission logic here
    console.log("Review submitted");
    // After submission, you might want to hide the review box again
    setShowReviewBox(false);
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-md-6">
          <div className="well well-sm">
            <div className="text-right">
              <a className="btn btn-success btn-green" href="#reviews-anchor" id="open-review-box" onClick={toggleReviewBox}>Leave a Review</a>
            </div>

            {showReviewBox && (
              <div className="row" id="post-review-box">
                <div className="col-md-12">
                  <form acceptCharset="UTF-8" onSubmit={handleSubmit}>
                    <input id="ratings-hidden" name="rating" type="hidden" /> 
                    <textarea className="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5"></textarea>

                    <div className="text-right">
                      <div className="stars starrr" data-rating="0"></div>
                      <a className="btn btn-danger btn-sm" href="#" id="close-review-box" onClick={toggleReviewBox} style={{ display: 'none', marginRight: '10px' }}>
                        <span className="glyphicon glyphicon-remove"></span>Cancel
                      </a>
                      <button className="btn btn-success btn-lg" type="submit">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Reviews;

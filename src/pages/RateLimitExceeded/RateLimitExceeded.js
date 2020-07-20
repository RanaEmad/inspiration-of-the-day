import React from "react";
import "./RateLimitExceeded.css";

class RateLimitExceeded extends React.Component {
  render() {
    return (
      <div className="rate-limit-exceeded">
        The API Rate Limit Was Exceeded. Please, Try Again Later
      </div>
    );
  }
}

export default RateLimitExceeded;

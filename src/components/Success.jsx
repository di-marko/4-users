import React from "react";
import success from "../img/success.svg";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Success!</h3>
      <p>All {count} users received an invite.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Back
      </button>
    </div>
  );
};

import React from "react";
import "./Spinner.styles.css";

const Spinner = ({ props }) => {
  return (
    <div className="spinner-container">
      <div className={`loading-spinner ${props}`}></div>
    </div>
  );
};

export default Spinner;

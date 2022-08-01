import React from "react";

import "./ClassificationCard.styles.css";

const ClassificationCard = ({ classificationData, filterByClassification }) => {
  return (
    <div className="classification__container">
      {classificationData.map((ele, i) => (
        <button
          className={`classification__btn ${ele}`}
          onClick={() => filterByClassification(ele)}
          key={i}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default ClassificationCard;

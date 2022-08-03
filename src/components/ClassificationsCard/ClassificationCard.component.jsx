import React from "react";
//import { classificationObject } from "../../utils/classificationData";
import "./ClassificationCard.styles.css";

const ClassificationCard = ({ classificationData, filterByClassification }) => {
  return (
    <div className="classification__container">
      {/* {classificationData.map((ele, i) => (
        <button
          className={`classification__btn ${ele}`}
          onClick={() => filterByClassification(ele)}
          key={i}
        >
          {classificationObject[ele]}
        </button>
      ))} */}
      {Object.entries(classificationData).map(([key, val]) => (
        <button
          className={`classification__btn ${key}`}
          onClick={() => filterByClassification(key)}
          key={val}
        >
          {classificationData[key]}
        </button>
      ))}
      <button
        className="reset__btn"
        onClick={() => filterByClassification(null)}
      >
        Reset
      </button>
    </div>
  );
};

export default ClassificationCard;

import React from "react";
import "./ElementCard.styles.css";

const ElementCard = ({
  AtomicNumber,
  Symbol,
  Name,
  AtomicMass,
  StateOfMatter,
  Classification,
}) => {
  return (
    <div className={`element__card ${Classification}`}>
      <div>{AtomicNumber}</div>
      <div className={`symbol__style ${StateOfMatter}`}>{Symbol}</div>
      <div>{Name}</div>
      <div>{AtomicMass}</div>
    </div>
  );
};

export default ElementCard;

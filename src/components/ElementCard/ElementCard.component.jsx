import React from "react";
import "./ElementCard.styles.css";

const ElementCard = ({
  AtomicNumber,
  Symbol,
  Name,
  AtomicMass,
  StateOfMatter,
  Classification,
  EmptyCard,
}) => {
  return (
    <div
      className={`element__card ${
        Classification ? Classification : "card__hidden"
      }`}
    >
      <div className="atomicNumber__style">{AtomicNumber}</div>
      <div className={`symbol__style ${StateOfMatter}`}>{Symbol}</div>
      <div className="name__style">{Name}</div>
      <div className="atomicMass__style">{AtomicMass}</div>
    </div>
  );
};

export default ElementCard;

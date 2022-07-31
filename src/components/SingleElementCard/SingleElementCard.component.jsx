import React from "react";
import "./SingleElementCard.styles.css";

const SingleElementCard = ({
  atomicNumber,
  symbol,
  name,
  atomicMass,
  stateOfMatter,
  classification,
  EmptyCard,
}) => {
  return (
    <div
      className={`single__element__card ${
        classification ? classification : "card__hidden"
      }`}
    >
      <div className="single__atomicNumber__style">{atomicNumber}</div>
      <div className={`single__symbol__style ${stateOfMatter}`}>{symbol}</div>
      <div className="single__name__style">{name}</div>
      <div className="single__atomicMass__style">{atomicMass}</div>
    </div>
  );
};

export default SingleElementCard;

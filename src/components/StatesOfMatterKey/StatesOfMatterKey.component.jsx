import React from "react";
import "./StatesOfMatterKey.styles.css";

const StatesOfMatterKey = ({ statesOfMatterData }) => {
  return (
    <div className="matter__key__container">
      {statesOfMatterData.map((matter, index) => (
        <div className={`matter__row ${matter.StateOfMatter}`}>
          <span className="symbol__key__style">{matter.Symbol}</span>{" "}
            {matter.StateOfMatter}
        </div>
      ))}
    </div>
  );
};

export default StatesOfMatterKey;

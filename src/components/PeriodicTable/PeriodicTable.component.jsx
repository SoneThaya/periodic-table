import React from "react";
import ElementCard from "../ElementCard/ElementCard.component";
import { elementsData } from "../../utils/elementsData";
import "./PeriodicTable.styles.css";

const PeriodicTable = () => {
  return (
    <div className="periodic__table__container">
      {elementsData.map((element) => (
        <ElementCard
          AtomicMass={element.AtomicMass}
          Symbol={element.Symbol}
          Name={element.Name}
          AtomicNumber={element.AtomicNumber}
          StateOfMatter={element.StateOfMatter}
          Classification={element.Classification}
        />
      ))}
    </div>
  );
};

export default PeriodicTable;

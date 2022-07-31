import React, { useState } from "react";
import ElementCard from "../ElementCard/ElementCard.component";
import SingleElementCard from "../SingleElementCard/SingleElementCard.component";
import { elementsData } from "../../utils/elementsData";
import "./PeriodicTable.styles.css";

const PeriodicTable = () => {
  const [name, setName] = useState("Hydrogen");
  const [atomicMass, setAtomicMass] = useState(1.008);
  const [symbol, setSymbol] = useState("H");
  const [atomicNumber, setAtomicNumber] = useState(1);
  const [classification, setClassification] = useState("Reactive_nonmetals");
  const [stateOfMatter, setStateOfMatter] = useState("Gas");

  const updateSingleElementCard = (ele) => {
    setName(ele.Name);
    setAtomicMass(ele.AtomicMass);
    setSymbol(ele.Symbol);
    setAtomicNumber(ele.AtomicNumber);
    setClassification(ele.Classification);
    setStateOfMatter(ele.StateOfMatter);
  };

  return (
    <div>
      <div>
        <SingleElementCard
          name={name}
          atomicMass={atomicMass}
          symbol={symbol}
          atomicNumber={atomicNumber}
          classification={classification}
          stateOfMatter={stateOfMatter}
        />
      </div>
      <div className="periodic__table__container">
        {elementsData.map((element) => (
          <div
            onClick={() => updateSingleElementCard(element)}
            key={element.Name}
          >
            <ElementCard
              AtomicMass={element.AtomicMass}
              Symbol={element.Symbol}
              Name={element.Name}
              AtomicNumber={element.AtomicNumber}
              StateOfMatter={element.StateOfMatter}
              Classification={element.Classification}
              EmptyCard={element.ElementCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;

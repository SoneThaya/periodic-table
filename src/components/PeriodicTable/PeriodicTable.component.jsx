import React, { useState } from "react";
import ElementCard from "../ElementCard/ElementCard.component";
import SingleElementCard from "../SingleElementCard/SingleElementCard.component";
import { elementsData } from "../../utils/elementsData";
import { classificationData } from "../../utils/classificationData";
import "./PeriodicTable.styles.css";
import ClassificationCard from "../ClassificationsCard/ClassificationCard.component";

const PeriodicTable = () => {
  const [name, setName] = useState("Hydrogen");
  const [atomicMass, setAtomicMass] = useState(1.008);
  const [symbol, setSymbol] = useState("H");
  const [atomicNumber, setAtomicNumber] = useState(1);
  const [classification, setClassification] = useState("Reactive_nonmetals");
  const [stateOfMatter, setStateOfMatter] = useState("Gas");
  const [filterClassData, setFilterClassData] = useState([]);

  const updateSingleElementCard = (ele) => {
    setName(ele.Name);
    setAtomicMass(ele.AtomicMass);
    setSymbol(ele.Symbol);
    setAtomicNumber(ele.AtomicNumber);
    setClassification(ele.Classification);
    setStateOfMatter(ele.StateOfMatter);
  };

  const filterByClassification = (classific) => {
    let data = elementsData.filter((ele) => ele.Classification !== classific);

    if (classific) {
      Object.keys(data).map(
        (key) => (data[key].selectedClassification = "filter__elements")
      );
    } else {
      Object.keys(data).map((key) => (data[key].selectedClassification = ""));
    }
    setFilterClassData(data);
  };

  return (
    <div>
      <div className="card__btn__container">
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
        <div>
          <ClassificationCard
            classificationData={classificationData}
            filterByClassification={filterByClassification}
          />
          <button className="reset__btn" onClick={() => filterByClassification(null)}>Reset</button>
        </div>
      </div>
      <div className="periodic__table__container">
        {elementsData.map((element, i) => (
          <div onClick={() => updateSingleElementCard(element)} key={i}>
            <ElementCard
              AtomicMass={element.AtomicMass}
              Symbol={element.Symbol}
              Name={element.Name}
              AtomicNumber={element.AtomicNumber}
              StateOfMatter={element.StateOfMatter}
              Classification={element.Classification}
              EmptyCard={element.ElementCard}
              selectedClassification={element.selectedClassification}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;

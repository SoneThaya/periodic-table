import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner.component";

const Render = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!props.when);
    }, 3000);
  }, [isLoading, props]);

  return (
    <>
      {isLoading ? (
        <Spinner props={props.override} />
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Render;

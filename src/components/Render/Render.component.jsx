import React, { useState, useEffect } from "react";

const Render = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.override) {
      setIsLoading(!props.override);
    } else {
      setIsLoading(!props.when);
    }
  }, [isLoading, props]);

  return (
    <>
      {isLoading && !props.override ? (
        <div className="spinner-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Render;

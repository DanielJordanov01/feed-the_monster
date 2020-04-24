import React from "react";

const FirstPage = ({ onRouteChange }) => {
  return (
    <div className="flex flex-column firstHeading">
      <h1>Would you feed the Donut Monster with tasty donuts?</h1>
      <button onClick={onRouteChange} className="btn btn-dark">
        Of Course!
      </button>
    </div>
  );
};

export default FirstPage;

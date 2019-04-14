import React from "react";

const FirstPage = ({ onRouteChange }) => {
  return (
    <div className="flex flex-column firstHeading">
      <h1>Ще нахраниш ли Габи с вкусни донъти?</h1>
      <button onClick={onRouteChange} className="btn btn-dark">
        Разбира се!
      </button>
    </div>
  );
};

export default FirstPage;

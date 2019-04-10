import React from "react";

function Donut({ donut, visibility, donutClassName }) {
  return (
    <div>
      <img id="donut" src={donut} alt="donut" className={donutClassName} />
    </div>
  );
}

export default Donut;

import React from "react";

function Donut({ donut, visibility }) {
  return (
    <div>
      <img
        id="donut"
        src={donut}
        alt="donut"
        style={{ visibility: visibility }}
      />
    </div>
  );
}

export default Donut;

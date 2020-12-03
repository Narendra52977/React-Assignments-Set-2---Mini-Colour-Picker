import React, { useEffect, useState } from "react";

export default function Selection({ applyColor }) {
  const [color, setColor] = useState({ background: "" });

  function handleClick(){
    applyColor(setColor)
   }

 
  return (
    <div
      className="fix-box"
      style={color}
      onClick={handleClick}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

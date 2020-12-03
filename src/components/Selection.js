import React from "react";
const Selection = (props) => {
  const { applyColor } = props;
  let [color, setcolor] = React.useState({
    background: ""
  });
  const handleClick=()=>{
    applyColor(setcolor)
  }

  return (
    <div
      className="fix-box"
      style={nextBackground}
      onClick={handleClick}
    >
      <h2 class="subheading">Selection</h2>
    </div>
  );
};
export default Selection;

import React from "react";
const Selection = (props) => {
  const { applyColor } = props;
  let [nextBackground, selectNextBackground] = React.useState({
    background: ""
  });

  return (
    <div
      className="fix-box"
      style={nextBackground}
      onClick={() => applyColor((color) => selectNextBackground(color))}
    >
      <h2 class="subheading">Selection</h2>
    </div>
  );
};
export default Selection;

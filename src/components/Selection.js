import React from "react";
const Selection = (props) => {
  const { applyColor } = props;
  let [nextBackground, selectNextBackground] = React.useState({
    background: ""
  });
  const handle = (background) => {
    selectNextBackground(background);
  };
  return (
    <div
      className="fix-box"
      style={nextBackground}
      onClick={() => applyColor(handle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;

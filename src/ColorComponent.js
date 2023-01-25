import React from "react";
import { useSelector } from "react-redux";
const ColorComponent = () => {
  const color = useSelector((state) => state.testReducer.areaColor) || "white";

  return (
    <div className="mainDiv" style={{ backgroundColor: color }}>
      ColorComponent
    </div>
  );
};
export default ColorComponent;

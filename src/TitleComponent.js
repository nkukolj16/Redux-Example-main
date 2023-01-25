import React from "react";
import { useSelector } from "react-redux";

const TitleComponent = () => {
  const titleColor = useSelector((state) => state.testReducer.titleColor) || "black";
  return (
    <h2 className="mainTitle" style={{color: titleColor}}>Let's get started!</h2>
  );
};
export default TitleComponent;

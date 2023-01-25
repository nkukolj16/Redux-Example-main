import React from "react";
import { useSelector } from "react-redux";

const TitleComponent = () => {
  const titleColor = useSelector((state) => state.testReducer.titleColor) || "black";
  return (
    <div className="container">
      <h2 className="mainTitle" style={{color: titleColor}}>Let's get started!</h2>
    </div>
  );
};
export default TitleComponent;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor, changeTitleColor } from "./actions/buttonActions";
import ColorComponent from "./ColorComponent";
import TitleComponent from "./TitleComponent";


function App() {
  const dispatch = useDispatch();

  const [randomColor, setRandomColor] = useState("");

  const random = () => {
    const letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColor(randomColor);
  }

  const onButtonClick = (color) => {
    dispatch(changeColor(color))

    random();
  }

  const onButtonClick2 = (titleColor) => {
    dispatch(changeTitleColor(titleColor))

    random();
  }


  return (
    <div>
      <button className="cool-button" onClick={() => onButtonClick2(randomColor)}>Generate color of TITLE</button>
      <TitleComponent />
      <button className="cool-button" onClick={() => onButtonClick(randomColor)}>Change color of div</button><br /><br />
      <ColorComponent />

    </div>
  );
}

export default App;
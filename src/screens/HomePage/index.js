import React, { useState } from "react";

import "./style.css";
import ColorPicker from "../../components/ColorPicker";
import ColorBox from "../../components/ColorBox";

const colors = [
  {
    name: "red",
    hex: "#ff0000",
  },
  {
    name: "yellow",
    hex: "#ffff00",
  },
  {
    name: "green",
    hex: "#00ff00",
  },
  {
    name: "blue",
    hex: "#0000ff",
  },
];

function HomePage() {
  const [value, setValue] = useState("#00ff00");
  const [isOpenColorPicker, setOpenColorPicker] = useState(false);
  const updateOpenColorPicker = () => {
    setOpenColorPicker((isOpenColorPicker) => !isOpenColorPicker);
  };

  const onChange = (color) => {
    setValue(color);
  };

  return (
    <div className="container">
      <h4>Color-picker</h4>
      <div onClick={updateOpenColorPicker} className="colorChangeContainer">
        <span className="colorChangeInfo">Click me, to change color box</span>
        <ColorBox color={value} />
      </div>
      {isOpenColorPicker && (
        <ColorPicker value={value} colors={colors} onChange={onChange} />
      )}
    </div>
  );
}

export default HomePage;

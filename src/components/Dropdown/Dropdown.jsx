import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const renderedColors = options.map((color) => {
    if (color.value === selected.value) {
      return null;
    }
    return (
      <div
        onClick={() => {
          onSelectedChange(color);
        }}
        key={color.value}
        className="item"
      >
        {color.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedColors}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

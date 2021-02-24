import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClicked = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClicked, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, []);
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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{`Select a ${label}`}</label>
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
      {/* <span
        style={{ color: selected.value }}
      >{`The color is ${selected.label}`}</span> */}
    </div>
  );
};

export default Dropdown;

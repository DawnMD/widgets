import React, { useState } from "react";

const Accordion = ({ datas }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onDataClick = (index) => {
    setActiveIndex(index);
  };
  const renderedListData = datas.map((data, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={data.title}>
        <div
          className={`title ${activeIndex}`}
          onClick={() => onDataClick(index)}
        >
          <i className="dropdown icon"></i>
          {data.title}
        </div>
        <div className={`content ${active}`}>
          <p>{data.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedListData}</div>;
};

export default Accordion;

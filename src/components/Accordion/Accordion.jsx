import React, { useState } from "react";

const Accordion = ({ datas }) => {
  const [activeIndex, setActiveIndex] = useState("");
  const onDataClick = (index) => {
    setActiveIndex(index);
  };
  const renderedListData = datas.map((data, index) => {
    return (
      <React.Fragment key={data.title}>
        <div className="active title" onClick={() => onDataClick(index)}>
          <i className="dropdown icon"></i>
          {data.title}
        </div>
        <div className="content active">
          <p>{data.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedListData}
      <h1>{`Clicked ${activeIndex} index`}</h1>
    </div>
  );
};

export default Accordion;

import React from "react";

const Accordion = ({ datas }) => {
  const renderedListItem = datas.map((data) => {
    return (
      <React.Fragment key={data.title}>
        <div className="active title">
          <i className="dropdown icon"></i>
          {data.title}
        </div>
        <div className="content active">
          <p>{data.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedListItem}</div>;
};

export default Accordion;

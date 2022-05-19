import React from "react";
import Icon from "../../Components/Icons/Index";
const Square = (props) => {
  return (
    <div className={`item  ${props.x ? 'blue' : ''}`} {...props}>
      {props.x ? (
        <Icon icon={"close"} className={"icon "} />
      ) : props.o ? (
        <Icon icon={"circle"} className={"icon yellow"} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;

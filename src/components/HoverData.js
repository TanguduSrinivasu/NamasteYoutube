import React from "react";

function HoverData(props) {
  return (
    <div title={props.data}>
      <h1>{props.text}</h1>
    </div>
  );
}

export default HoverData;
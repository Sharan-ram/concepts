import React from "react";
import withCounter from "./HOC";

const HoverCounterComponent = ({ count, incrementCount }) => {
  return (
    <div>
      <button
        onMouseOver={incrementCount}
      >{`Hover Counter(${count} times)`}</button>
    </div>
  );
};

const HoverCounter = withCounter(HoverCounterComponent);

export default HoverCounter;

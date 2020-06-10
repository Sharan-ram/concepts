import React from "react";
import withCounter from "./HOC";

const ClickCounterComponent = ({ count, incrementCount }) => {
  return (
    <div>
      <button
        onClick={incrementCount}
      >{`Click Counter(${count} times)`}</button>
    </div>
  );
};

const ClickCounter = withCounter(ClickCounterComponent);

export default ClickCounter;

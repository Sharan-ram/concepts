import React, { useContext } from "react";
import withCounter from "./HOC";

import { UserContext } from "./index";

const ClickCounterComponent = ({ count, incrementCount }) => {
  const name = useContext(UserContext);
  return (
    <div>
      <button
        onClick={incrementCount}
      >{`Click Counter(${count} times)`}</button>
      <div>User Name is {name}</div>
    </div>
  );
};

const ClickCounter = withCounter(ClickCounterComponent);

export default ClickCounter;

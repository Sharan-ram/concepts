import React from "react";

import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const Counter = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <ClickCounter />
      </div>
      <div>
        <HoverCounter />
      </div>
    </div>
  );
};

export default Counter;

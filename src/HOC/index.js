import React, { createContext } from "react";

import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export const UserContext = createContext();

const Counter = () => {
  return (
    <UserContext.Provider value={"Sharan"}>
      <UserContext.Provider value={"Name"}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <ClickCounter />
          </div>
          <div>
            <HoverCounter />
          </div>
        </div>
      </UserContext.Provider>
    </UserContext.Provider>
  );
};

export default Counter;

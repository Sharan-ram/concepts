import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./HOC";
import DataFetching from "./DataFetching";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/hoc" component={Counter} />
        <Route exact path="/data-fetching" component={DataFetching} />
        <Route component={() => <div>Landing Page</div>} />
      </Switch>
    </Router>
  );
};

export default App;

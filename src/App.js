import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./HOC";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/hoc" component={Counter} />
        <Route component={() => <div>Landing Page</div>} />
      </Switch>
    </Router>
  );
};

export default App;

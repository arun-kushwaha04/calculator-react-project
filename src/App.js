import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { Error } from "./error";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

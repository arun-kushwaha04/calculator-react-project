import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { Error } from "./error";
import { Operation } from "./operation";
import { Particle } from "./particle";
function App() {
  return (
    <React.Fragment>
      <Particle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add" render={() => <Operation operation="Adding" />} />
        <Route
          path="/subtract"
          render={() => <Operation operation="Subtracting" />}
        />
        <Route
          path="/multiply"
          render={() => <Operation operation="Multiplying" />}
        />
        <Route
          path="/divide"
          render={() => <Operation operation="Dividing" />}
        />
        <Route path="*" component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

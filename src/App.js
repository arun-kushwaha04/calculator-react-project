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
        <Route exact path="/calculator-react-project/" component={Home}></Route>
        <Route
          path="/calculator-react-project/add"
          render={() => <Operation operation="Adding" />}
        />
        <Route
          path="/calculator-react-project/subtract"
          render={() => <Operation operation="Subtracting" />}
        />
        <Route
          path="/calculator-react-project/multiply"
          render={() => <Operation operation="Multiplying" />}
        />
        <Route
          path="/calculator-react-project/divide"
          render={() => <Operation operation="Dividing" />}
        />
        <Route path="*" component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Particles from "react-particles-js";
import { particleConfig } from "./particlesjs-config";
import { Home } from "./home";
import { Error } from "./error";
import { Operation } from "./operation";
function App() {
  return (
    <React.Fragment>
      <Particles className="particles" params={particleConfig} />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/a" component={Operation} />
        <Route path="*" component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

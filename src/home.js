import React from "react";
import Particles from "react-particles-js";
import { particleConfig } from "./particlesjs-config";
import Button from "./buttom";

export const Home = () => {
  return (
    <>
      <Particles className="particles" params={particleConfig} />
      <section className="home">
        <h1>CALCULATOR</h1>
        <div>
          <Button value="Adittion" />
          <Button value="Adittion" />
          <Button value="Adittion" />
          <Button value="Adittion" />
        </div>
      </section>
    </>
  );
};

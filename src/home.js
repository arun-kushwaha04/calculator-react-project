import React from "react";
import Particles from "react-particles-js";
import { particleConfig } from "./particlesjs-config";

export const Home = () => {
  return (
    <section className="home">
      <Particles params={particleConfig} />
    </section>
  );
};

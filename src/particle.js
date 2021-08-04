import React from "react";
import Particles from "react-particles-js";
import { particleConfig } from "./particlesjs-config";
import Pic1 from "./astronaut-1.png";
import Pic2 from "./moon.png";
// import Pic3 from "./rocket.png";
// import Pic4 from "./saturn.png";

export const Particle = () => {
  return (
    <>
      <Particles className="particles" params={particleConfig}></Particles>
      <img src={Pic1} alt="Astronaut waving hand" className="Pic1" />
      <img src={Pic2} alt="moon" className="Pic2" />
      {/* <img src={Pic3} alt="rocket" className="Pic3" />
      <img src={Pic4} alt="rocket" className="Pic4" /> */}
    </>
  );
};

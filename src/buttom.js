import React from "react";
import Tilt from "react-tilt";

const Button = ({ value }) => {
  return (
    <Tilt className="Tilt" options={{ max: 25 }}>
      <div className="operation-btn Tilt-inner">{value}</div>
    </Tilt>
  );
};

export default Button;

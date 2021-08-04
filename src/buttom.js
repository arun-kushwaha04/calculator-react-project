import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

const Button = ({ value, img }) => {
  return (
    <Link to={`/calculator-react-project/${value}`}>
      <Tilt
        className="Tilt"
        options={{
          reverse: true,
          speed: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          reset: true,
          transition: true,
          scale: 1,
        }}>
        <div className="operation-btn ">{img}</div>
      </Tilt>
    </Link>
  );
};

export default Button;

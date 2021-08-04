import React from "react";
import { FaMinus, FaPlus, FaDivide, FaTimes } from "react-icons/fa";
import Button from "./buttom";

export const Home = () => {
  return (
    <>
      <section className="home">
        <h1>CALCULATOR</h1>
        <div>
          <Button value="add" img={<FaPlus />} />
          <Button value="subtract" img={<FaMinus />} />
          <Button value="multiply" img={<FaTimes />} />
          <Button value="divide" img={<FaDivide />} />
        </div>
      </section>
    </>
  );
};

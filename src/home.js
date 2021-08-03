import React from "react";
import { FaMinus, FaPlus, FaDivide, FaTimes } from "react-icons/fa";
import Button from "./buttom";

export const Home = () => {
  return (
    <>
      <section className="home">
        <h1>CALCULATOR</h1>
        <div>
          <Button value="Adittion" img={<FaPlus />} />
          <Button value="Adittion" img={<FaMinus />} />
          <Button value="Adittion" img={<FaTimes />} />
          <Button value="Adittion" img={<FaDivide />} />
        </div>
      </section>
    </>
  );
};

import React, { useEffect, useRef } from "react";
import { FaMinusCircle, FaPlusCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "./context";

export const Operation = ({ operation = "Adding" }) => {
  const {
    firstNumber,
    secondNumber,
    setFirstNumber,
    setSecondNumber,
    operator,
    setOperator,
    answer,
    setAnswer,
  } = UseGlobalContext();

  const ref1 = useRef(null);

  useEffect(() => {
    setOperator(operation);
    if (operation === "Dividing") {
      setFirstNumber(1);
      setSecondNumber(1);
    }
  }, [operation, setFirstNumber, setOperator, setSecondNumber]);
  useEffect(() => {
    switch (operator) {
      case "Adding":
        setAnswer(firstNumber + secondNumber);
        break;
      case "Subtracting":
        setAnswer(firstNumber - secondNumber);
        break;
      case "Multiplying":
        setAnswer(firstNumber * secondNumber);
        break;
      case "Dividing":
        if (secondNumber === 0) {
          alert("Dividing By Zero Not Allowed");
          setAnswer("infinity");
        } else {
          setAnswer(parseFloat(firstNumber / secondNumber));
        }
        break;
      default:
        setFirstNumber(0);
        setSecondNumber(0);
        setAnswer(0);
        break;
    }
  }, [
    firstNumber,
    secondNumber,
    operator,
    setFirstNumber,
    setSecondNumber,
    setAnswer,
  ]);

  return (
    <section className="layout">
      <Link to="/">
        <FaHome className="home-icon" />
      </Link>
      <h1>{operation} Two Numbers</h1>

      <div className="number-inputs">
        <div className="quantity">
          <input
            type="number"
            placeholder="0"
            value={firstNumber}
            onChange={(e) => {
              setFirstNumber(parseInt(e.target.value));
            }}
            ref={ref1}
          />
          <div className="button-div">
            <FaMinusCircle
              onClick={() => {
                setFirstNumber(firstNumber - 1);
              }}
            />
            <FaPlusCircle
              onClick={() => {
                setFirstNumber(firstNumber + 1);
              }}
            />
          </div>
        </div>

        <div className="quantity">
          <input
            type="number"
            placeholder="0"
            value={secondNumber}
            onChange={(e) => setSecondNumber(parseInt(e.target.value))}
          />
          <div className="button-div">
            <FaMinusCircle
              onClick={() => {
                setSecondNumber(secondNumber - 1);
              }}
            />
            <FaPlusCircle
              onClick={() => {
                setSecondNumber(secondNumber + 1);
              }}
            />
          </div>
        </div>
      </div>

      <div className="answer-div">
        <button className="btn-operation">Answer</button>
        <h2>{answer}</h2>
      </div>
    </section>
  );
};

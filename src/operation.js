import React, { useEffect } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { UseGlobalContext } from "./context";

export const Operation = ({ operation }) => {
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

  useEffect(() => setOperator(operation), [operation, setOperator]);
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
        setAnswer(firstNumber - secondNumber);
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
      <h1>{operation} Two Numbers</h1>

      <div className="number-inputs">
        <div className="quantity">
          <input
            type="number"
            placeholder="0"
            value={firstNumber}
            onChange={(e) => {
              console.log(e.target);
              setFirstNumber(e.target.value);
            }}
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
            onChange={(e) => setSecondNumber(e.target.value)}
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
        <h1>{answer}</h1>
      </div>
    </section>
  );
};

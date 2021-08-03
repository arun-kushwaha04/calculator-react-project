import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("Adding");
  const [answer, setAnswer] = useState(0);

  return (
    <AppContext.Provider
      value={{
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        operator,
        setOperator,
        answer,
        setAnswer,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

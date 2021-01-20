import React from "react";

function Calculator() {
  const [expression, setExpression] = React.useState("");

  const calculate = () => {
    // Addition
    if (expression.indexOf("+") !== -1) {
      const lhs = expression.substring(0, expression.indexOf("+"));
      const rhs = expression.substring(
        expression.indexOf("+") + 1,
        expression.length
      );
      setExpression(Number(lhs) + Number(rhs));
    }

    // Subtraction
    if (expression.indexOf("-") !== -1) {
      const lhs = expression.substring(0, expression.indexOf("-"));
      const rhs = expression.substring(
        expression.indexOf("-") + 1,
        expression.length
      );
      setExpression(Number(lhs) - Number(rhs));
    }

    // Multiplication
    if (expression.indexOf("*") !== -1) {
      const lhs = expression.substring(0, expression.indexOf("*"));
      const rhs = expression.substring(
        expression.indexOf("*") + 1,
        expression.length
      );
      setExpression(Number(lhs) * Number(rhs));
    }

    // Division
    if (expression.indexOf("/") !== -1) {
      const lhs = expression.substring(0, expression.indexOf("/"));
      const rhs = expression.substring(
        expression.indexOf("/") + 1,
        expression.length
      );
      setExpression(Number(lhs) / Number(rhs));
    }
  };
  const update = (character) => {
    if (character === "=") {
      calculate();
    } else {
      setExpression(expression + character);
    }
  };
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*", "="].map((digit) => (
        <button key={digit} onClick={() => update(digit)}>
          {digit}
        </button>
      ))}
      <p>{expression}</p>
    </div>
  );
}
export default Calculator;

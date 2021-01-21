import React from "react";
import "../styles/Calculator.css";

function Calculator() {
  const [expression, setExpression] = React.useState("");
  const [evaluated, setEvaluated] = React.useState(false);

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

    setEvaluated(true);
  };

  const update = (character) => {
    if (character === "=") {
      calculate();
    } else {
      if (evaluated) {
        setExpression(expression + character);
        setEvaluated(false);
      }
      setExpression(expression + character);
    }
  };

  const clear = () => {
    setExpression("");
    setEvaluated(false);
  };

  const undo = () => {
    setExpression(expression.substring(0, expression.length - 1));
  };

  return (
    <div className="calculator">
      <input className="screen" readOnly value={expression}></input>
      <div className="calculate-buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*", "="].map(
          (digit) => (
            <button
              className="calculate-button"
              key={digit}
              onClick={() => update(digit)}
            >
              {digit}
            </button>
          )
        )}
      </div>
      <div className="edit-buttons">
        <button key="undo" onClick={undo}>
          Undo
        </button>
        <button key="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}
export default Calculator;

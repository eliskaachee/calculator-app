import React from "react";

function Calculator() {
  const [expression, setExpression] = React.useState("");

  const calculate = () => {
    console.log(expression);
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

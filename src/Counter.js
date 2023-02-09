import { useState } from "react";

function Counter() {
  // let counterState = useState(5);
  // console.log(counterState); // [5, setState]

  // let count = counterState[0]
  // let setCount = counterState[1]

  // useState(5)  -->  [5, setState]

  // array destructuring
  let [count, setCount] = useState(0);

  // let counterState = useState(5);
  // let count = counterState[0]
  // let setCount = counterState[1]

  let [inputValue, setInputValue] = useState("");

  function increment(event) {
    setCount(count + inputValue);
    setInputValue("");
  }

  function decrement(event) {
    setCount(count - inputValue);
    setInputValue("");
  }

  function multiply(event) {
    setCount(count * inputValue);
    setInputValue("");
  }

  function divide(event) {
    setCount(count / inputValue);
    setInputValue("");
  }

  function handleChange(event) {
    // takes current value of input
    //console.log(parseInt(event.target.value));
    // and sets/updates the inputValue state variable
    setInputValue(parseInt(event.target.value));
  }

  return (
    <>
      <span>Current Count: {count}</span>
      <section className="section">
        <input value={inputValue} onChange={handleChange} />

        <button className="button" onClick={increment}>
          +
        </button>
        <button className="button" onClick={decrement}>
          -
        </button>
        <button className="button" onClick={multiply}>
          *
        </button>
        <button className="button" onClick={divide}>
          /
        </button>
      </section>
    </>
  );
}

export default Counter;

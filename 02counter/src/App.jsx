import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //let counter = 15

  // const addValue = () => {
  // counter = counter + 1
  //   if (counter < 5) {
  //     setCounter(counter + 1);
  //   }
  // };
  // const removeValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };

  // If interviewer said the change the the single variable on single click 4 times

  const addValue = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };
  const removeValue = () => {
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 0.4);
    setCounter((counter) => counter - 0.2);
    setCounter((counter) => counter - 0.5);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;

/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [output, setOutputValue] = useState(0);
  const [input, setInputValue] = useState(0);

  function clickEventHandling(value) {
    switch (value) {
      case "AC":
        setInputValue(0);
        setOutputValue(0);
        break;

      case "Del":
        if (input.length > 0) {
          input.length == 1
            ? setInputValue(0)
            : setInputValue(input.slice(0, input.length - 1));
        }
        break;

      case "=":
        setOutputValue(eval(input));
        setInputValue(0);
        break;

      default:
        input == 0 ? setInputValue(value) : setInputValue(input + value);
        break;
    }
  }

  return (
    <div className="container">
      <div className="calculator-frame">
        <Output output={output} />
        <Input input={input} />
        <Button clickEventHandling={clickEventHandling} />
      </div>
    </div>
  );
}

export default App;

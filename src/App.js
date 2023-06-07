import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

function App() {

  const [ output, setOutputValue] = useState(0);
  const [ input, setInputValue ] = useState(0);

  function clickEventHandling(value){
    console.log(value);
  }

  return (
    <div className="container">
      <div className="calculator-frame">
        <Output output={output}/>
        <Input input={input}/>
        <Button clickEventHandling={clickEventHandling} />
      </div>
    </div>
  );
}

export default App;

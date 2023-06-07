import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  return (
    <div className="container">
      <div className="calculator-frame">
        <Output/>
        <Input/>
        <Button/>
      </div>
    </div>
  );
}

export default App;

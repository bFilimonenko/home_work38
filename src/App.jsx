import "./App.css";
import { Button } from "./components/Button.jsx";
import { Input } from "./components/Input.jsx";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const greet = () => {
    !name ? alert(`You didn't enter a name`) : alert(`Hello, ${name}!`);
  };

  return (
    <>
      <p>Your name is {name || "..."}?</p>
      <Input onChange={e =>setName(e.target.value)} placeholder={"Enter Your Name"}/>
      <Button text={"Save"} onClick={greet}></Button>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul>
        <li>Maito</li>
        <li>Leipä</li>
        <li>Sokeri</li>
      </ul>
    </>
  );
}

export default App;

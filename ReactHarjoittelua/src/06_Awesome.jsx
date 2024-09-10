import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Minun mahtava websivu tehtynä Reactilla </h1>
      <h3>Syyt, miksi rakastan Reactia</h3>
      <ol>
        <li>Se rakentuu palikoista</li>
        <li>se on kuvaileva kieli</li>
        <li>Työpaikan saanti sen avulla on varma</li>
        <li>Sitä ylläpitää taitavat koodaajat</li>
      </ol>
    </>
  );
}

export default App;

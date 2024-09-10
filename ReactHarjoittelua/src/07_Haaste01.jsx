import reactLogo from "./assets/react.svg";
import "./App.css";
function App() {
  return (
    <>
      <img src={reactLogo} alt="React logo" />
      <h1>Hauskoja faktoja Reactista</h1>
      <ul>
        <li>Julkaistiin 2013</li>
        <li>Alumperin Jordan Walken luoma</li>
        <li>Sillä on reilusti yli 100 tähteä Githubissa</li>
        <li>Facebook ylläpitää sitä</li>
        <li>
          Tuhannet yrityssovellukset käyttävät sitä, myös mobiilisovellukset
        </li>
      </ul>
    </>
  );
}

export default App;

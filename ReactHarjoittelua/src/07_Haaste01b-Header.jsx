import reactLogo from "./assets/react.svg";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <nav>
        <img src={reactLogo} alt="React logo" />
      </nav>
      <h1>Hauskoja faktoja Reactista</h1>
    </>
  );
}
function Page() {
  return (
    <>
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

function Footer() {
  return <p>&copy; 2024 Lindroos development. All rights reserved</p>;
}

export default App;

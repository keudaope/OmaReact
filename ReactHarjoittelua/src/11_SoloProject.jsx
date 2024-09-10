import "./App.css";

function Header() {
  return (
    <>
      <img src="../Jyri.jpg" alt="" className="kuva" />
    </>
  );
}

function Esittely() {
  return (
    <main className="sisalto">
      <div className="esittely">
        <h5>Jyri Lindroos</h5>
        <h6>Opettaja</h6>
        <p>jyri.lindroos@gmail.com</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Esittely />
    </div>
  );
}

export default App;

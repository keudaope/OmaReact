import "./App.css";
import Navigointipalkki from "./komponentit/10_Navikointipalkki";
import Sisalto from "./komponentit/10_Sisalto";
import Page from "./09_Page";
import Footer from "./09_Footer";

function App() {
  return (
    <div className="container">
      <Navigointipalkki />
      <Sisalto />
    </div>
  );
}

export default App;

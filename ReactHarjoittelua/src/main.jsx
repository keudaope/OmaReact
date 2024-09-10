import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./01_Heippa.jsx";
// import App from "./02_Nimeni.jsx";
// import App from "./03_Lista";
// import { Navbar, Content } from "./04_Sisalto";
// import App from "./05_Navbar.jsx";
// import App from "./06_Awesome";
// import App from "./07_Haaste01";
// import App from "./07_Haaste01a-Lista";
// import App from "./07_Haaste01b-Header";
// import App from "./08_Navigointi";
// import App from "./09_Koonti";
// import App from "./10_App";
import App from "./11_SoloProject";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

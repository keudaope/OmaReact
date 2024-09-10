import reactLogo from "./assets/react.svg";
export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={reactLogo} alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Hauskoja faktoja Reactista</h1>
    </>
  );
}

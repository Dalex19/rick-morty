import "./header.css";

function Main() {
  return (
    <div className="containerHeader">
      <nav className="containerNavBar">
        <img src="https://cdn.svgporn.com/logos/firefox.svg" className="logo" />
        <ul className="listItem">
          <li>Docs</li>
          <li>About</li>
          <li>SUPPORT US</li>
        </ul>
      </nav>
      <h1 className="title">The Rick and Morty API</h1>
    </div>
  );
}

export default Main;
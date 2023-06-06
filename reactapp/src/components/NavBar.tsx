import styles from "./css/Navbar.module.css";
function NavBar() {
  //TODO: contents of scrollToElem get lost when the page is refreshed
  const baseAddress = `${window.location.protocol}//${window.location.host}`;
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" id={styles.foo} href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href={baseAddress}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

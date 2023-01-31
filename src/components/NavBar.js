import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [dataAttributes, setDataAttributes] = useState(false);

  const toggleNav = () => {
    setDataAttributes((prevAttr) => !prevAttr);
  };

  return (
    <header className="header-element">
      <div className="header">
        <div className="nav-container">
          <Link to="/" className="logo">
            <h2>Quizzical</h2>
          </Link>
          <nav className="nav">
            <ul
              className="primary-navigation"
              data-visible={dataAttributes}
              id="primary-navigation"
            >
              <div onClick={toggleNav} className="nav-icon cancel-btn">
                <i className="fas fa-times"></i>
              </div>
              <Link to="/" className="nav-link" onClick={toggleNav}>
                Home
              </Link>
            </ul>
            <div
              aria-controls="primary-navigation"
              onClick={toggleNav}
              className="nav-icon menu-btn"
            >
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

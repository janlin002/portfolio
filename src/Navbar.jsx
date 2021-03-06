import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style/index.css';
import { ContextApi } from './ContextApi';

function Navbar() {
  const { locale, bgTheme, textTheme } = useContext(ContextApi);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: textTheme }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ color: bgTheme }}>
            David
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0"></ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link navbarHover"
                    aria-current="page"
                    to="/"
                    style={{ color: bgTheme }}
                  >
                    {locale.home}
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link navbarHover"
                    style={{ color: bgTheme }}
                  >
                    {locale.about}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbarHover"
                    style={{ color: bgTheme }}
                  >
                    {locale.projects}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link navbarHover"
                    style={{ color: bgTheme }}
                  >
                    {locale.resume}
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link navbarHover"
                    to="/setting"
                    style={{ color: bgTheme }}
                  >
                    {locale.setting}
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

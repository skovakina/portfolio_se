import '../blocks/Navbar.css';

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo-box">
          <a className="nav__list-link" to="/">
            svetlana kovakina
          </a>
        </div>

        <nav className="nav__nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__list-link" to="/">
                home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/#section-work" className="nav__list-link">
                work
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="https://drive.google.com/file/d/1XKq9LYA_uIsRiSYlsurhTIOwUpkD2g9N/view?usp=sharing" target="_blank">
                resume
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" to="/about">
                about
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

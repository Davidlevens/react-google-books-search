import React from "react";
import "./style.css";

const Nav = props => (
  <div>
    <nav className="navbar fixed-top" >
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/searchBooks" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Google Books Search
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/saveBooks" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            Your Saved Books
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;

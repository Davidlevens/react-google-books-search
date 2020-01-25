import React from "react";

const Nav = props => (
  <div>
    <nav className="navbar fixed-top" style={{ marginBottom: "40px", backgroundColor: "forestgreen", height: "50px" }}>
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

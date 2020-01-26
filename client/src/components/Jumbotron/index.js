import React from "react";
import "./style.css";


const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center" }}
      className="jumbotron"
    >
      <img src="/images/books.jpg" alt="books-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;
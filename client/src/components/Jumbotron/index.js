import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "forestgreen" }}
      className="jumbotron"
    >
      <img src="/images/books.jpg" alt="books-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;
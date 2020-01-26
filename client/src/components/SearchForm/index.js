import React from "react";
import "./style.css";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input autocomplete="off" style={{ textAlign: "left" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book, Author, or Topic"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-lg search-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
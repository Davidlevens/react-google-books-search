import React from "react";

const BookDetail = props => {
  return (
    <span>
      <div className="col-md-4" style={{ float: "left", marginTop: "20px" }}>
      <img className="image is-128xauto" src={props.src} alt={props.title} />
        <h3 className="heading-title">{props.title}</h3>
            {props.subtitle && <h5 className="heading-subtitle">{props.subtitle}</h5>}
        <p><strong>Author(s):</strong> {props.authors}</p>
        <p><strong>Publish Date:</strong> {props.date}</p>
        <p><strong>Google Books Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
        <button onClick={props.handleSaveBook} className="btn btn-lg save-btn" style={{ marginBottom: "30px"}}>
          Save Book
        </button>
      </div>
      <div className="col-md-8" style={{ float: "right", marginTop: "20px" }}>
        <p className="p-article" style={{ marginBottom: "30px"}}><strong>Description:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default BookDetail;
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <span key={index} className="saved-movie">
        {movie.title}
      </span>
    ))}
    <Link to="/" className="home-button">
      Home
    </Link>
  </div>
);

export default SavedList;
//study react keys when iterating over an array in a map function/function.

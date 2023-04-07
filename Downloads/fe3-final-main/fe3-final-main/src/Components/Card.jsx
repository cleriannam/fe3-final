import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorite = { id, name, username };
    const updatedFavorites = [...existingFavorites, newFavorite];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">★</button>
    </div>
  );
};

export default Card;
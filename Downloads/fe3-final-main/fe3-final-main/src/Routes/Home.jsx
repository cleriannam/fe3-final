import React, { useState, useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../context/theme.context";

const Home = () => {
  const [favoriteCards, setFavoriteCards] = useState(
    JSON.parse(localStorage.getItem("favoriteCards")) || []
  );
  const { theme } = useContext(ThemeContext);

  const addFavoriteCard = (card) => {
    const updatedFavoriteCards = [...favoriteCards, card];
    setFavoriteCards(updatedFavoriteCards);
    localStorage.setItem("favoriteCards", JSON.stringify(updatedFavoriteCards));
  };

  const removeFavoriteCard = (card) => {
    const updatedFavoriteCards = favoriteCards.filter(
      (favCard) => favCard.id !== card.id
    );
    setFavoriteCards(updatedFavoriteCards);
    localStorage.setItem("favoriteCards", JSON.stringify(updatedFavoriteCards));
  };

  const isCardFavorited = (card) => {
    return favoriteCards.some((favCard) => favCard.id === card.id);
  };

  return (
    <main className={`main ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        <Card
          name="Name1"
          username="Username1"
          id={1}
          isFavorited={isCardFavorited({ id: 1 })}
          onAddFavorite={addFavoriteCard}
          onRemoveFavorite={removeFavoriteCard}
        />
        <Card
          name="Name2"
          username="Username2"
          id={2}
          isFavorited={isCardFavorited({ id: 2 })}
          onAddFavorite={addFavoriteCard}
          onRemoveFavorite={removeFavoriteCard}
        />
        <Card
          name="Name3"
          username="Username3"
          id={3}
          isFavorited={isCardFavorited({ id: 3 })}
          onAddFavorite={addFavoriteCard}
          onRemoveFavorite={removeFavoriteCard}
        />
      </div>
    </main>
  );
};

export default Home;
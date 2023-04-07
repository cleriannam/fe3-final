import React, { useState } from 'react'
import Card from '../Components/Card'

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const [favoriteCards, setFavoriteCards] = useState([])

  const addFavoriteCard = (card) => {
    const updatedFavoriteCards = [...favoriteCards, card]
    setFavoriteCards(updatedFavoriteCards)
    localStorage.setItem('favoriteCards', JSON.stringify(updatedFavoriteCards))
  }

  const removeFavoriteCard = (card) => {
    const updatedFavoriteCards = favoriteCards.filter(favCard => favCard.id !== card.id)
    setFavoriteCards(updatedFavoriteCards)
    localStorage.setItem('favoriteCards', JSON.stringify(updatedFavoriteCards))
  }

  const isCardFavorited = (card) => {
    return favoriteCards.some(favCard => favCard.id === card.id)
  }

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aquí deberías renderizar las cards */}
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
  )
}

export default Home
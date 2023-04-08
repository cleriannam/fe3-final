import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const { favs } = useGlobalContext();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favs.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              specialty={dentist.specialty}
              photo={dentist.photo}
              rating={dentist.rating}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Favs;

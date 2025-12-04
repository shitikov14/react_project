import { useState } from "react";
import { Restaurant } from "../restaurants/Restaurant";

export const RestaurantList = ({ restaurants }) => {

  const [activeId, setActiveId] = useState(restaurants[0].id);

  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return <p>Рестораны не найдены</p>
  }

  const activeRestaurant = restaurants.find(r => r.id === activeId);

  return (
    <>
      <div>
        {restaurants.map(r => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            style={{
              fontWeight: r.id === activeId ? "bold" : "normal"
            }}
          >
            {r.name}
          </button>
        ))}
      </div>

      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};

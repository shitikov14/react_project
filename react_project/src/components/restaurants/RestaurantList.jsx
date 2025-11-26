import { useState } from "react";
import { Restaurant } from "../restaurants/Restaurant";

export const RestaurantList = ({restaurants}) => {

  const [activeId, setActiveId] = useState(
    Array.isArray(restaurants) && restaurants.length > 0
      ? restaurants[0].id
      : null
  );

  const activeRestaurant = Array.isArray(restaurants)
    ? restaurants.find((restaurant) => restaurant.id === activeId)
    : null;

  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return <p>Рестораны не найдены</p>
  }

  return (
    <>
      <div className="restaurants__tabs">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            type="button"
            className={
              "restaurants__tab-btn" +
                        (restaurant.id === activeId
                          ? " restaurants__tab-btn--active"
                          : "")
            }
            onClick={() => {
              if (restaurant.id === activeId) return;
              setActiveId(restaurant.id);
            }}
          >
            {restaurant.name}
          </button>
        ))}
      </div>

      <ul className="restaurants__list">
        {activeRestaurant && (
          <Restaurant restaurant={activeRestaurant} />
        )}
      </ul>
    </>

  )
}
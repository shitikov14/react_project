import { useState } from "react";
import { Restaurant } from "../restaurants/Restaurant";
import classNames from "classnames";
import styles from './RestaurantList.module.css';

export const RestaurantList = ({ restaurants }) => {

  const [activeId, setActiveId] = useState(restaurants[0].id);

  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return <p>Рестораны не найдены</p>
  }

  const activeRestaurant = restaurants.find(r => r.id === activeId);

  return (
    <>
      <div className={classNames(styles['restaurantWrapper'])}>
        <div className={classNames(styles['restaurantsTabs'])}>
          {restaurants.map(r => (
            <button
              key={r.id}
              onClick={() => setActiveId(r.id)}
              className={classNames(
                styles["tabButton"],
                {
                  [styles["tabButtonActive"]]: r.id === activeId,
                }
              )}
            >
              {r.name}
            </button>
          ))}
        </div>

        <Restaurant restaurant={activeRestaurant} />
      </div>
    </>
  );
};

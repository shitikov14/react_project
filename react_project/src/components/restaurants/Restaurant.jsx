import { MenuList } from "../menu/MenuList";
import { ReviewList } from "../reviews/ReviewList";
export const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurants__list-block">
      <h2>{restaurant.name}</h2>
      {restaurant.menu?.length ? (
        <MenuList menu={restaurant.menu} />
      ) : (
        <p>Меню отстутствует</p>
      )}
      {restaurant.reviews?.length ? (
        <ReviewList reviews={restaurant.reviews} />
      ) : (
        <p>Отзывов пока нет</p>
      )}
    </div>
  );
};
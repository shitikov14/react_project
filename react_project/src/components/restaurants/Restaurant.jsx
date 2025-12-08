import { MenuList } from "../menu/MenuList";
import { ReviewList } from "../reviews/ReviewList";
import { ReviewForm } from "../reviews/review-form/ReviewForm";
import classNames from "classnames";
import styles from './RestaurantList.module.css';

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={classNames(styles['restaurantsListBlock'])}>
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
      <ReviewForm />
    </div>
  );
};
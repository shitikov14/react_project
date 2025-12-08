import { ReviewItem } from './ReviewItem'
import classNames from "classnames";
import styles from './Reviews.module.css';

export const ReviewList = ({ reviews }) => {
  return (
    <div className={classNames(styles['reviewsList'])}>
      <ul className={classNames(styles['reviewsListBlock'])}>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
    </div>
  )
}
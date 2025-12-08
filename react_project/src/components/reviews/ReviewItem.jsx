import classNames from "classnames";
import styles from './Reviews.module.css';

export const ReviewItem = ({ review }) => {
  return (
    <li>
      <div className={classNames(styles['reviewBlock'])}>
        <p>{review.user}:</p>
        <p className={classNames(styles['review__block-text'])}>{review.text}</p>
        <p>{review.rating}</p>
      </div>
    </li>
  )
}
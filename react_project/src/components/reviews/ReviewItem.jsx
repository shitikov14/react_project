import classNames from "classnames";
import styles from './Reviews.module.css';

export const ReviewItem = ({ review }) => {
  return (
    <li>
      <div className={classNames(styles['review__block'])}>
        <p className='review__block-name'>{review.user}:</p>
        <p className={classNames(styles['review__block-text'])}>{review.text}</p>
        <p className='review__block-rating'>{review.rating}</p>
      </div>
    </li>
  )
}
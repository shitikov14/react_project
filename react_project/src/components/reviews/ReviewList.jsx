import { ReviewItem } from './ReviewItem'

export const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews__list">
      <ul className='reviews__list-block'>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
    </div>
  )
}
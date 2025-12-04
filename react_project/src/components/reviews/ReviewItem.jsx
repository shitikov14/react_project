export const ReviewItem = ({ review }) => {
  return (
    <li>
      <div className='review__block'>
        <p className='review__block-name'>{review.user}:</p>
        <p className='review__block-text'>{review.text}</p>
        <p className='review__block-rating'>{review.rating}</p>
      </div>
    </li>
  )
}
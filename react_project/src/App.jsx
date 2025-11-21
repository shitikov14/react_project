import './App.css'
// моковые данные
import { restaurants } from './constants';

function App() {
  return (
    <div>
      <h1>Рестораны</h1>
      <ul className='restaurants__list'>
        {restaurants.map((restaurant) => (
          <li className='restaurants__list-block' key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <div className='menu__list'>
              <h3>Меню</h3>
              <ul className='menu__list-block'>
                {restaurant.menu.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price}$
                  </li>
                ))}
              </ul>
            </div>
            <div className='reviews__list'>
              <h3>Отзывы</h3>
              <ul className='reviews__list-block'>
                {restaurant.reviews.map((item) => (
                  <li key={item.id}>
                    <div className='review__block'>
                        <p className='review__block-name'>{item.user}:</p>
                        <p className='review__block-text'>{item.text}</p>
                        <p className='review__block-rating'>{item.rating}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

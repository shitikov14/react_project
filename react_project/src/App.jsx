import './App.css'
import { Main } from './layouts/Layout';
import { RestaurantList } from './components/restaurants/RestaurantList';
import { restaurants } from "./constants/restaurants";

function App() {
  return (
    <Main>
      <RestaurantList restaurants={restaurants} />
    </Main>
  );
}

export default App;

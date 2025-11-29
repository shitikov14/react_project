import './App.css'
import { Main } from './layouts/Layout';
import { RestaurantList } from './components/restaurants/RestaurantList';
import { restaurants } from "./constants/restaurants";
import { ScrollBar } from "./components/scrollbar/ScrollBar";

function App() {
  return (
    <Main>
      <ScrollBar />
      <RestaurantList restaurants={restaurants} />
    </Main>
  );
}

export default App;

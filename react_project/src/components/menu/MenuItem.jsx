import { DishCounter } from "../counter/DishCounter";

export const MenuItem = ({ item }) => {
  return (
    <li>
      {item.name} - {item.price}$ 
      <DishCounter />
    </li>
  )
}

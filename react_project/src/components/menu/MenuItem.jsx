import { Counter } from "../counter/Counter";

export const MenuItem = ({ item }) => {
  return (
    <li>
      {item.name} - {item.price}$ <Counter />
    </li>
  )
}

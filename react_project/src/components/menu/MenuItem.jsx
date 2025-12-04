import { DishCounter } from "../counter/DishCounter";
import classNames from "classnames";
import styles from './Menu.module.css';

export const MenuItem = ({ item }) => {
  return (
    <li className={classNames(styles['menu__list-item'])}>
      {item.name} - {item.price}$ 
      <DishCounter />
    </li>
  )
}

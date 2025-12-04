import { MenuItem } from "./MenuItem";
import classNames from "classnames";
import styles from './Menu.module.css';

export const MenuList = ({ menu }) => {
  return (
    <div className={classNames(styles['menu__list'])}>
      <h3>Меню</h3>
      <ul className='menu__list-block'>
        {menu.map(item => (
          <MenuItem item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  )
}
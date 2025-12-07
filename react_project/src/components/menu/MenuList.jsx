import { MenuItem } from "./MenuItem";
import classNames from "classnames";
import styles from './Menu.module.css';

export const MenuList = ({ menu }) => {
  return (
    <div className={classNames(styles['menuList'])}>
      <h3>Меню</h3>
      <ul className='menuListBlock'>
        {menu.map(item => (
          <MenuItem item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  )
}
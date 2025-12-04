import { MenuItem } from "./MenuItem";

export const MenuList = ({ menu }) => {
  return (
    <div className='menu__list'>
      <h3>Меню</h3>
      <ul className='menu__list-block'>
        {menu.map(item => (
          <MenuItem item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  )
}
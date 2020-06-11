import React, { FC } from 'react'
import MenuItem from 'components/MenuItem'
import { MenuItemData } from 'components/types'

type Props = {
  menuItems: MenuItemData[]
}

const NavigationMenu: FC<Props> = ({ menuItems }) => {
  return (
    <ul className="menu__list">
      {menuItems.map((menuItem, index) => (
        <MenuItem data={menuItem} key={index} />
      ))}
    </ul>
  )
}

export default NavigationMenu

import React, { FC, Component } from 'react'
import MenuItem from 'components/MenuItem'
import { MenuItemData, MenuItemNode } from 'components/types'

type Props = {
  menuItems: Array<MenuItemData | MenuItemNode>
}

const NavigationMenu: FC<Props> = ({ menuItems }) => {
  return (
    <ul className="menu__list">
      {menuItems.map((menuItem, index) => {
        if (menuItem.type === 'node') {
          return (
            <li className="menu__item" key={index}>
              <React.Fragment>{menuItem.content}</React.Fragment>
            </li>
          )
        }
        return (
          <li className="menu__item" key={index}>
            <MenuItem data={menuItem} />
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationMenu

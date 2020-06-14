export type MenuItemData = {
  type: 'data'
  label: string
  url?: string
  children?: Array<MenuItemData | MenuItemNode>
  className?: string
}

export type MenuItemNode = {
  type: 'node'
  content: React.ReactNode | HTMLElement
}

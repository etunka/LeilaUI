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

export type LanguageCode = 'en' | 'nl'

export type Language = {
  code: LanguageCode
  label: string
  rootUrl: string
}

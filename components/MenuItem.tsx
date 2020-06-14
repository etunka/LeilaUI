import React, { FC } from 'react'
import Link from 'next/link'
import { MenuItemData } from './types'

type Props = {
  data: MenuItemData
}

const MenuItem: FC<Props> = ({ data }) => {
  const { label, url } = data
  return (
    <Link href={url ? url : '#'}>
      <a>{label}</a>
    </Link>
  )
}

export default MenuItem

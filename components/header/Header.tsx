import React, { FC } from 'react'
import classNames from 'classnames'
import Hamburger from './Hamburger'

type Props = {
  primaryMenu?: React.ReactNode | HTMLElement
  secondaryMenu?: React.ReactNode | HTMLElement
  logo?: React.ReactNode | HTMLElement
  logoPosition?: 'left' | 'center'
}

const Header: FC<Props> = ({
  primaryMenu,
  secondaryMenu,
  logo,
  logoPosition = 'left',
}) => {
  const blockClass = classNames('header', {
    'header--single': !secondaryMenu,
    'header--double': !!secondaryMenu,
    'header--left': logoPosition === 'left',
    'header---center': logoPosition === 'center',
  })

  return (
    <div className={blockClass}>
      {logo && <div className="header__logo">{logo}</div>}
      <div className="menu menu--primary">{primaryMenu}</div>
      {secondaryMenu && (
        <div className="menu menu--secondary">{secondaryMenu}</div>
      )}
      <Hamburger />
    </div>
  )
}

export default Header

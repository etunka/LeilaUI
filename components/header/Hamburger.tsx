import React, { FC, useState } from 'react'
import classNames from 'classnames'

const Hamburger: FC = () => {
  const [open, setOpen] = useState(false)
  const hamburgerClass = classNames('hamburger', {
    open: open,
  })
  return (
    <button className={hamburgerClass} onClick={() => setOpen(!open)}>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </button>
  )
}

export default Hamburger

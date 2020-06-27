import React, { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

type Props = {
  size?: 'small' | 'large'
  url?: string
  text: string
}

const Button: FC<Props> = ({ size, url = '#', text }) => {
  const buttonClass = classNames('button', {
    'button--small': size === 'small',
    'button--large': size === 'large',
  })

  return (
    <>
      {url ? (
        <Link href={url}>
          <a>
            <button className={buttonClass}>{text}</button>
          </a>
        </Link>
      ) : (
        <button className={buttonClass}>
          <React.Fragment>{text}</React.Fragment>
        </button>
      )}
    </>
  )
}

export default Button

import React, { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

type Props = {
  theme?: 'simple' | 'text'
  imageUrl: string
  size?: 'small' | 'large'
  url?: string
}

const Logo: FC<Props> = ({
    theme = 'no-text',
    imageUrl,
    size,
    url = '/'
}) => {
    const logoClass = classNames('logo', {
        'logo--simple':theme === 'simple',
        'logo--text':theme === 'text',
        'logo--small':size === 'small',
        'logo--large':size === 'large'
    })

    return (
        <div className={logoClass}>
            <Link href="/">
                <a><img src={imageUrl}/></a>
            </Link>
        </div>
    )
}

export default Logo
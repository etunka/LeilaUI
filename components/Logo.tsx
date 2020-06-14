import React, { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

type Props = {
  imageUrl: string
  size?: 'small' | 'large'
  url?: string
}

const Logo: FC<Props> = ({
    imageUrl,
    size,
    url = '/'
}) => {
    const logoClass = classNames('logo', {
        'logo--small':size === 'small',
        'logo--large':size === 'large'
    })

    return (
        <div className={logoClass}>
            <Link href={url}>
                <a><img src={imageUrl}/></a>
            </Link>
        </div>
    )
}

export default Logo
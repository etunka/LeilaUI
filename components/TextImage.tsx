import React, { FC } from 'react'
import classNames from 'classnames'

type Props = {
  imageAlignment?: 'left' | 'right'
  imageUrl: string
}

const TextImage: FC<Props> = ({
  imageAlignment = 'left',
  imageUrl,
  children,
}) => {
  const blockClass = classNames('text-image', {
    'text-image--left': imageAlignment === 'left',
    'text-image--right': imageAlignment === 'right',
  })

  return (
    <div className={blockClass}>
      <div className="text-image__image">
        <img src={imageUrl} />
      </div>
      <div className="text-image__text">{children}</div>
    </div>
  )
}

export default TextImage

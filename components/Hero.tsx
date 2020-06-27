import React, { FC } from 'react'
import classNames from 'classnames'
import CallToAction from 'components/CallToAction'

type Props = {
  contentAlignment?: 'left' | 'right' | 'center'
  imageUrl: string
  title?: string
  content: string
  button?: boolean
  buttonText?: string
}

const Hero: FC<Props> = ({
  contentAlignment = 'right',
  imageUrl,
  title,
  content,
  button,
  buttonText,
}) => {
  const heroClass = classNames('hero', {
    'hero--right': contentAlignment === 'right',
    'hero--left': contentAlignment === 'left',
    'hero--center': contentAlignment === 'center',
  })

  return (
    <div className={heroClass}>
      <img className="hero__image" src={imageUrl} />
      <div className="hero__cta-container">
        <CallToAction
          title={title}
          content={content}
          button={button}
          buttonText={buttonText}
        />
      </div>
    </div>
  )
}

export default Hero

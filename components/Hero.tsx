import React, { FC } from 'react'
import classNames from 'classnames'
import CTA from 'components/CTA'

type Props = {
  alignment?: 'left' | 'right' | 'center'
  backgroundImageUrl: string
  title?: string
  content: string
  button?: boolean
  buttonText?: string
}

const Hero: FC<Props> = ({
  alignment = 'right',
  backgroundImageUrl,
  title,
  content,
  button,
  buttonText,
}) => {
  const heroClass = classNames('hero', {
    'hero--right': alignment === 'right',
    'hero--left': alignment === 'left',
    'hero--center': alignment === 'center',
  })

  return (
    <div className={heroClass}>
      <img className="hero__image" src={backgroundImageUrl} />
      <div className="hero__cta-container">
        <CTA
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

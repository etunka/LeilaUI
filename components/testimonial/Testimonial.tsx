import React, { FC } from 'react'
import classNames from 'classnames'
import QuoteSign from './images/quote.svg'

type Props = {
  theme?: 'fancy' | 'simple'
  name?: string
  position?: string
  imageUrl?: string
}

const Testimonial: FC<Props> = ({
  theme = 'simple',
  name,
  position,
  imageUrl,
  children,
}) => {
  const blockClass = classNames('testimonial', {
    'testimonial--simple': theme === 'simple',
    'testimonial--fancy': theme === 'fancy',
  })

  return (
    <div className={blockClass}>
      {imageUrl && (
        <div className="testimonial__image">
          <img src={imageUrl} />
        </div>
      )}
      <div className="testimonial__container">
        <blockquote className="testimonial__quote">
          {theme === 'fancy' && (
            <div className="testimonial__quote-sign">
              <QuoteSign />
            </div>
          )}
          {children}
        </blockquote>
        {name && (
          <div className="testimonial__person">
            <span className="testimonial__name">{name}</span>
            {position && (
              <div className="testimonial__position-container">
                {theme === 'fancy' && (
                  <span className="testimonial__slash">/</span>
                )}
                <span className="testimonial__position">{position}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonial

import React, { FC } from 'react'
import classNames from 'classnames'
import Button from 'components/Button'

type Props = {
  title?: string
  content: string
  button?: boolean
  buttonText?: string
}

const CTA: FC<Props> = ({ title, content, button, buttonText }) => {
  return (
    <div className="cta">
      {title && <h3 className="cta__title">{title}</h3>}
      <p className="cta__content">{content}</p>
      {button && (
        <div className="cta__button">
          <Button size="large" text={buttonText} />
        </div>
      )}
    </div>
  )
}

export default CTA

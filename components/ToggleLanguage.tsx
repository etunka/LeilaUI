import React, { FC, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

type Props = {
  defaultLanguage: string
  alternativeLanguage: string
  currentUrl: string
}

const ToggleLanguage: FC<Props> = ({
  defaultLanguage,
  alternativeLanguage,
  currentUrl,
}) => {
  const [active, setActive] = useState(false)
  const languageClass = classNames('toggle-language__item', {
    active: active,
  })

  return (
    <div className="toggle-language">
      <button className={languageClass} onClick={() => setActive(!active)}>
        <Link href={currentUrl}>
          <a>{defaultLanguage}</a>
        </Link>
      </button>
      <span>/</span>
      <button className={languageClass} onClick={() => setActive(!active)}>
        <Link href={currentUrl}>
          <a>{alternativeLanguage}</a>
        </Link>
      </button>
    </div>
  )
}

export default ToggleLanguage

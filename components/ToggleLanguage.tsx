import React, { FC, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { Language, LanguageCode } from './types'

type Props = {
  languages: Language[]
  selected: LanguageCode
}

const ToggleLanguage: FC<Props> = ({ languages, selected }) => {
  return (
    <div className={'toggle-language'}>
      {languages.map((language, index) => {
        const languageClass = classNames('toggle-language__item', {
          selected: language.code === selected,
        })
        const isLast = index === languages.length - 1
        return (
          <>
            <Link href={language.rootUrl} key={index}>
              <a className={languageClass}>{language.label}</a>
            </Link>
            {!isLast && <span>/</span>}
          </>
        )
      })}
    </div>
  )
}

export default ToggleLanguage

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Close } from '@/assets/Close.svg'
// Icons
import { ReactComponent as ProductHunt } from '@/assets/PH.svg'
// i18n

// Components (styles)
import { Wrapper } from './banner.styles.js'

const Banner = () => {
  // i18n
  const { t } = useTranslation()
  // Banner close button (persistence state)¹
  const BANNER = 'banner_hidden'
  const [isBannerHidden, setIsBannerHidden] = useState<boolean>(() => JSON.parse(localStorage.getItem(BANNER) ?? 'false'))

  // Persist hidden state on localStorage¹
  const hideBanner = () => {
    localStorage.setItem(BANNER, JSON.stringify('true'))
    setIsBannerHidden(true)
  }

  return (
    <>
      {!isBannerHidden ? (
        <Wrapper>
          <div>
            <ProductHunt />
            <a
              href="https://www.producthunt.com/posts/edite"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Banner')}
            </a>
          </div>
          <button onClick={hideBanner}>
            <Close />
          </button>
        </Wrapper>
      ) : null}
    </>
  )
}

export default Banner

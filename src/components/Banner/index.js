import { useState, useEffect } from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// Icons
import { ReactComponent as ProductHunt } from '../../assets/PH.svg';
import { ReactComponent as Close } from '../../assets/Close.svg';
// Components (styles)
import { Wrapper } from './banner.styles.js';

function Banner() {
  // i18n
  const { t } = useTranslation();
  // Banner close button (persistence state)¹
  const BANNER = 'banner_hidden';
  const [banner, setBanner] = useState(
    localStorage.getItem(BANNER) || 0
  );

  // Persist hidden state on localStorage¹
  const hideBanner = () => setBanner(
    localStorage.setItem(BANNER, 1)
  )

  return (
    <>
      {banner === 0 ? (
        <Wrapper>
          <div>
            <ProductHunt />
            <a href="https://www.producthunt.com/posts/edite">
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

export default Banner;

// i18n
import { useTranslation } from 'react-i18next';
// Images
import { ReactComponent as Preview } from '../../../assets/Window.svg';
// Components (styles)
import { Section } from './sectionOne.styles';
import { HeadingOne, Description, Button } from '../../index';

function SectionOne() {
  const { t } = useTranslation();

  return (
    <Section id="home">
      {/* Row */}
      <div className="sectionOne__row">
        {/* Left → Content */}
        <div className="sectionOne__column">
          <HeadingOne>{t('SectionOne.Title')}</HeadingOne>
          <Description>{t('SectionOne.Description')}</Description>
          <Button>{t('Button')}</Button>
        </div>

        {/* Right → Preview Video */}
        <div className="sectionOne__column">
          <Preview />
        </div>
      </div>
    </Section>
  )
}

export default SectionOne;

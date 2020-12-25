// i18n
import { useTranslation } from 'react-i18next';
// Components (styles)
import { Section } from './sectionOne.styles';
import { HeadingOne, Description, Button } from '../../index';
// Images
const Preview = '/images/Window.png';

function SectionOne() {
  const { t } = useTranslation();

  const redirectToApp = () => window.open('https://editeapp.vercel.app');

  return (
    <Section id="home">
      {/* Row */}
      <div className="sectionOne__row">
        {/* Left → Content */}
        <div className="sectionOne__column">
          <HeadingOne>{t('SectionOne.Title')}</HeadingOne>
          <Description>{t('SectionOne.Description')}</Description>
          <Button
            onClick={redirectToApp}
          >
            {t('Button')}
          </Button>
        </div>

        {/* Right → Preview Video */}
        <div className="sectionOne__column">
          <img src={Preview} alt="Edite Preview" />
        </div>
      </div>
    </Section>
  )
}

export default SectionOne;

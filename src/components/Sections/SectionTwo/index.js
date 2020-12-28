// i18n
import { useTranslation } from 'react-i18next';
// Components (children)
import CardsList from './cards';
// Components (styles)
import { Section } from './sectionTwo.styles';
import { HeadingTwo, Description, Button } from '../../index';

function SectionTwo() {
  const { t } = useTranslation();

  const redirectToApp = () => window.open('https://editeapp.netlify.app');

  return (
    <Section id="tools">
      <HeadingTwo>{t('SectionTwo.Title')}</HeadingTwo>
      <Description>{t('SectionTwo.Description')}</Description>
      <CardsList />
      <Button
        onClick={redirectToApp}
      >
        {t('Button')}
      </Button>
    </Section>
  )
}

export default SectionTwo;

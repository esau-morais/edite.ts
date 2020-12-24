// i18n
import { useTranslation } from 'react-i18next';
// Components (styles)
import { Section } from './sectionThree.styles';
import { HeadingTwo, Description, Button } from '../../index';

function SectionThree() {
  const { t } = useTranslation();

  return (
    <Section id="community">
      <HeadingTwo>{t('SectionThree.Title')}</HeadingTwo>
      <Description>{t('SectionThree.Description')}</Description>
      <Button>{t('SectionThree.Button')}</Button>
    </Section>
  )
}

export default SectionThree;

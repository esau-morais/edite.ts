// i18n
import { useTranslation } from 'react-i18next'

import { Description, Section } from '@/components'

import { Faq } from './sectionThree.styles'

const SectionThree = () => {
  const { t } = useTranslation()

  return (
    <Section
      id="faq"
      style={{
        paddingTop: 'var(--margin2x)',
        paddingBottom: 'var(--margin2x)',
      }}
    >
      <Faq>
        <summary>{t('SectionThree.Question.One')}</summary>
        <summary>
          <Description>
            {t('SectionThree.Answer.One')}{' '}
            <span role="img" aria-label="smile face">
              😁
            </span>
          </Description>
        </summary>
      </Faq>

      <Faq>
        <summary>{t('SectionThree.Question.Two')}</summary>
        <summary>
          <Description>
            {t('SectionThree.Answer.Two')}{' '}
            <span role="img" aria-label="smile face">
              😁
            </span>
          </Description>
        </summary>
      </Faq>

      <Faq>
        <summary>{t('SectionThree.Question.Three')}</summary>
        <summary>
          <Description>
            {t('SectionThree.Answer.Three')}{' '}
            <a
              href="https://github.com/Edite-App/.github/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--secondary-blue)' }}
            >
              {t('SectionThree.Link.Three')}
            </a>{' '}
            <span role="img" aria-label="link">
              🔗
            </span>
          </Description>
        </summary>
      </Faq>
    </Section>
  )
}

export default SectionThree

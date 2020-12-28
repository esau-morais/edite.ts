// i18n
import { useTranslation } from 'react-i18next';
// Components (children)
import Card from './card';
// Icons
import { ReactComponent as Crop } from 'assets/Crop.svg';
import { ReactComponent as Text } from 'assets/Text.svg';
import { ReactComponent as Filter } from 'assets/Filter.svg';
import { ReactComponent as Shortcuts } from 'assets/Shortcuts.svg';
import { ReactComponent as Settings } from 'assets/Settings.svg';
// Components (styles)
import { Box } from './sectionTwo.styles.js';

function CardsList() {
  const { t } = useTranslation();

  return (
    <Box>
      <Card
        toolName={t('Tools.One.Name')}
        toolDescription={t('Tools.One.Description')}
      >
        <Crop />
      </Card>
      <Card
        toolName={t('Tools.Two.Name')}
        toolDescription={t('Tools.Two.Description')}
      >
        <Text />
      </Card>
      <Card
        toolName={t('Tools.Three.Name')}
        toolDescription={t('Tools.Three.Description')}
      >
        <Filter />
      </Card>
      <Card
        toolName={t('Tools.Four.Name')}
        toolDescription={t('Tools.Four.Description')}
      >
        <Shortcuts />
      </Card>
      <Card
        toolName={t('Tools.Five.Name')}
        toolDescription={t('Tools.Five.Description')}
      >
        <Settings />
      </Card>
    </Box>
  )
}

export default CardsList

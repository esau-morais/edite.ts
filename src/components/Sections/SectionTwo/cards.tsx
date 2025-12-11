// i18n
// Icons
import { useTranslation } from "react-i18next";

import Crop from "@/assets/Crop.svg?react";
import Filter from "@/assets/Filter.svg?react";
import Settings from "@/assets/Settings.svg?react";
import Shortcuts from "@/assets/Shortcuts.svg?react";
import Text from "@/assets/Text.svg?react";

// Components (children)
import Card from "./card";
// Components (styles)
import { Box } from "./sectionTwo.styles.js";

const CardsList = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Card
        toolName={t("Tools.One.Name")}
        toolDescription={t("Tools.One.Description")}
      >
        <Crop />
      </Card>
      <Card
        toolName={t("Tools.Two.Name")}
        toolDescription={t("Tools.Two.Description")}
      >
        <Text />
      </Card>
      <Card
        toolName={t("Tools.Three.Name")}
        toolDescription={t("Tools.Three.Description")}
      >
        <Filter />
      </Card>
      <Card
        toolName={t("Tools.Four.Name")}
        toolDescription={t("Tools.Four.Description")}
      >
        <Shortcuts />
      </Card>
      <Card
        toolName={t("Tools.Five.Name")}
        toolDescription={t("Tools.Five.Description")}
      >
        <Settings />
      </Card>
    </Box>
  );
};

export default CardsList;

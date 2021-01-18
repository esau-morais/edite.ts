// i18n
// Components (styles)
import { Section } from "components";
import { useTranslation } from "react-i18next";
import { Button, Description, HeadingTwo } from "../../index";

function SectionThree() {
  const { t } = useTranslation();

  const redirectToCommunity = () =>
    window.open("https://discord.gg/hXTBQc2RFJ");

  return (
    <Section id="community">
      <HeadingTwo>{t("SectionFour.Title")}</HeadingTwo>
      <Description>{t("SectionFour.Description")}</Description>
      <Button onClick={redirectToCommunity}>{t("SectionFour.Button")}</Button>
    </Section>
  );
}

export default SectionThree;

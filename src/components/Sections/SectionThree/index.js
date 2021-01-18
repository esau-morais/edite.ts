// i18n
import { Description, Section } from "components";
import { useTranslation } from "react-i18next";
import { Faq } from "./sectionThree.styles";

function SectionThree() {
  const { t } = useTranslation();

  return (
    <Section
      id="faq"
      style={{
        paddingTop: "var(--margin2x)",
        paddingBottom: "var(--margin2x)",
      }}
    >
      <Faq>
        <summary>{t("SectionThree.Question.One")}</summary>
        <summary>
          <Description>
            {t("SectionThree.Answer.One")}{" "}
            <span role="img" aria-label="smile face">
              😁
            </span>
          </Description>
        </summary>
      </Faq>
    </Section>
  );
}

export default SectionThree;

import { useTranslation } from "react-i18next";

const AboutInfo = () => {
  const {t} = useTranslation();
  return (
    <div className="info">
      <h2>
        {t('about.description.title')}
      </h2>
      <p>
        {t('about.description.paragraph1')}
      </p>
      <p>
        {t('about.description.paragraph2')}
      </p>
      <p>
        {t('about.description.paragraph3')}
      </p>
    </div>
  );
};

export default AboutInfo;

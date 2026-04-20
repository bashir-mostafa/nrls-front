import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../../components/inputs/Input";
import Button from "../../../../components/buttons/Button";
import { useTranslation } from "react-i18next";

const Forms = ({ formik }) => {
  const { t } = useTranslation();

  return (
    <div className="inputs">
      <div>
        <h2>
          <FontAwesomeIcon icon={faPaperPlane} /> {t("contact.send_message")}
        </h2>
        <p>{t("contact.form_description")}</p>
      </div>

      <Input
        name="email"
        label={t("user.email")}
        placeholder={t("contact.placeholders.email")}
        onChange={formik.handleChange}
        errorText={t(formik.errors.email)}
        value={formik.values.email}
      />

      <Input
        name="message"
        label={t("contact.message")}
        placeholder={t("contact.placeholders.message")}
        onChange={formik.handleChange}
        errorText={t(formik.errors.message)}
        value={formik.values.message}
        elementType="textarea"
        rows={7}
      />
      <Button type="submit">
        <FontAwesomeIcon icon={faPaperPlane} /> {t("contact.submit")}
      </Button>
    </div>
  );
};

export default Forms;

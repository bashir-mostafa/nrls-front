import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PopUp from "../../../../components/popup/PopUp";
import endPoints from "../../../../constant/endPoints";
import Input from "../../../../components/inputs/Input";
import SelectInputApi from "../../../../components/inputs/SelectInputApi";
import Button from "../../../../components/buttons/Button";

const PostFilters = ({ onClose, filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters || {});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setLocalFilters((p) => ({ ...p, [name]: value }));
  }, []);

  const handleOptionInp = useCallback((name, value) => {
    setLocalFilters((p) => ({ ...p, [name]: value }));
  }, []);

  const { i18n } = useTranslation();

  const language = useMemo(() => i18n.language, [i18n]);

  const handleSave = useCallback(() => {
    setFilters(localFilters);
    onClose();
  }, [setFilters, localFilters, onClose]);
  const {t} = useTranslation();
  return (
    <PopUp isOpen className="filters-popup" onClose={onClose}>
      <div className="filters-container">
        <SelectInputApi
          endPoint={endPoints.categories}
          onChange={(e) => handleOptionInp("category", e)}
          placeholder={localFilters?.category?.[`name_${language}`] || "all"}
          label={t("pages.categories")}
          optionLabel={(e) => e?.[`name_${language}`]}
          customOptions={[
            {
              title: "all",
              onChange: () => handleOptionInp("category", ""),
            },
          ]}
          notRequired
        />
        <SelectInputApi
          endPoint={endPoints.tags}
          onChange={(e) => handleOptionInp("tags", e)}
          placeholder={localFilters?.tags?.[`name_${language}`] || "all"}
          label={t("pages.tags")}
          optionLabel={(e) => e?.[`name_${language}`]}
          customOptions={[
            {
              title: "all",
              onChange: () => handleOptionInp("tags", ""),
            },
          ]}
          notRequired
        />
        <SelectInputApi
          endPoint={endPoints.authors}
          onChange={(e) => handleOptionInp("author", e)}
          placeholder={localFilters?.author?.full_name || "all"}
          label={t("pages.authors")}
          optionLabel={(e) => e?.full_name}
          customOptions={[
            {
              title: "all",
              onChange: () => handleOptionInp("author", ""),
            },
          ]}
          notRequired
        />

        <Input
          name="created_at_gte"
          notRequired
          label={t("common.from")}
          value={localFilters?.created_at_gte ?? ""}
          onChange={handleChange}
          type="date"
        />
        <Input
          name="created_at_lte"
          notRequired
          label={t("common.to")}
          value={localFilters?.created_at_lte ?? ""}
          onChange={handleChange}
          type="date"
        />
      </div>
      <div className="btns">
        <Button onClick={handleSave} btnType="update">
          {t("common.save")}
        </Button>
        <Button btnStyleType="transparent" btnType="cancel" onClick={onClose}>
          {t("common.cancel")}
        </Button>
      </div>
    </PopUp>
  );
};

export default PostFilters;

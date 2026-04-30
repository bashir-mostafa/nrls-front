import Filters from "../../../../../components/table_toolbar/Filters";
import Input from "../../../../../components/inputs/Input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import SelectInputApi from "../../../../../components/inputs/SelectInputApi";
import endPoints from "../../../../../constant/endPoints";
import { useTranslation } from "react-i18next";

const CategoriesFilter = ({ filters, setFilters, t, setPage }) => {
  const [local, setLocal] = useState(filters);

  const [debouncedValue] = useDebounce(local, 500);

  useEffect(() => {
    setFilters(debouncedValue);
    setPage(1);
  }, [debouncedValue, setFilters, setPage]);

  const handleChange = useCallback(
    (e) => setLocal((p) => ({ ...p, [e.target.name]: e.target.value })),
    [],
  );
  const { i18n } = useTranslation();
  const language = useMemo(() => i18n.language, [i18n]);

  return (
    <Filters filters={filters} setFilters={setFilters}>
      <Input
        name="name_ar"
        placeholder={t("tags.search_by_ar")}
        value={local?.name_ar ?? ""}
        notRequired
        onChange={handleChange}
        label={t("tags.name_ar")}
      />
      <Input
        name="name_en"
        placeholder={t("tags.search_by_en")}
        value={local?.name_en ?? ""}
        notRequired
        onChange={handleChange}
        label={t("tags.name_en")}
      />
      <Input
        name="name_ku"
        placeholder={t("tags.search_by_ku")}
        value={local?.name_ku ?? ""}
        notRequired
        onChange={handleChange}
        label={t("tags.name_ku")}
      />
      <SelectInputApi
        endPoint={endPoints.contentType}
        onChange={(e) => setLocal((p) => ({ ...p, content_type: e }))}
        placeholder={
          local?.content_type?.[`name_${language}`] || t("common.all")
        }
        label={t("common.content_type")}
        optionLabel={(e) => `${e.name_en} - ${e.name_ar} - ${e.name_ku}`}
        notRequired
        customOptions={[
          {
            title: t("common.all"),
            onChange: () => setLocal((p) => ({ ...p, content_type: "" })),
          },
        ]}
      />
    </Filters>
  );
};

export default CategoriesFilter;

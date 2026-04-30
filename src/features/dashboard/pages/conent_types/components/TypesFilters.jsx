import Filters from "../../../../../components/table_toolbar/Filters";
import Input from "../../../../../components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useTranslation } from "react-i18next";

const TypesFilters = ({ filters, setFilters, setPage }) => {
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
  const { t } = useTranslation();

  return (
    <Filters
      filters={filters}
      setFilters={setFilters}
      FromToFields={[
        { name: "priority", label: "content_types.priority", type: "number" },
      ]}
    >
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
    </Filters>
  );
};

export default TypesFilters;

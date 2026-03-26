import Filters from "../../../../../components/table_toolbar/Filters";
import Input from "../../../../../components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const CategoriesFilter = ({ filters, setFilters }) => {
  const [local, setLocal] = useState(filters);

  const [debouncedValue] = useDebounce(local, 500);

  useEffect(() => {
    setFilters(debouncedValue);
  }, [debouncedValue, setFilters]);

  const handleChange = useCallback(
    (e) => setLocal((p) => ({ ...p, [e.target.name]: e.target.value })),
    [],
  );

  return (
    <Filters filters={filters} setFilters={setFilters}>
      <Input
        name="name_ar"
        placeholder="search by name_ar"
        value={local?.name_ar ?? ""}
        notRequired
        onChange={handleChange}
        label="name_ar"
      />
      <Input
        name="name_en"
        placeholder="search by name_en"
        value={local?.name_en ?? ""}
        notRequired
        onChange={handleChange}
        label="name_en"
      />
      <Input
        name="name_ku"
        placeholder="search by name_ku"
        value={local?.name_ku ?? ""}
        notRequired
        onChange={handleChange}
        label="name_ku"
      />
    </Filters>
  );
};

export default CategoriesFilter;

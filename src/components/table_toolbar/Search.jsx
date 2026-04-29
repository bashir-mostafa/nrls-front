import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { icons } from "../../constant/icons";

const Search = ({ delay = 500, setSearch, setPage }) => {
  const [inputValue, setInputValue] = useState("");

  const [debouncedValue] = useDebounce(inputValue, delay);

  useEffect(() => {
    setSearch(debouncedValue);
    setPage(1);
  }, [debouncedValue, setSearch, setPage]);

  const { t } = useTranslation();

  return (
    <label className="table-toolbar-search">
      <input
        type="text"
        placeholder={t("common.search")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FontAwesomeIcon icon={icons.search} />
    </label>
  );
};

export default Search;

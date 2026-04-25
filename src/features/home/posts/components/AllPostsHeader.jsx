import {
  faArrowDownShortWide,
  faCheck,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import IconButton from "../../../../components/buttons/IconButton";
import { useTranslation } from "react-i18next";
const postSortOptions = [
  {
    title: "latest",
    set: "-published_at",
    name: "published_at",
  },
  {
    title: "oldest",
    set: "published_at",
    name: "published_at",
  },
  {
    title: "most_liked",
    set: "-view_count",
    name: "view_count",
  },
  {
    title: "least_liked",
    set: "view_count",
    name: "view_count",
  },
];

const AllPostsHeader = ({ sort, setSort, toggleFilters }) => {
  const { isOpen, ref, toggleOpen } = useClickOutside();

  const handleSetSort = useCallback(
    (state) => {
      setSort(state);
      toggleOpen();
    },
    [toggleOpen, setSort],
  );

  const value = useMemo(() => Object.values(sort)?.[0], [sort]);
  const { t } = useTranslation();
  return (
    <div className="icons" ref={ref}>
      <IconButton
        icon={faFilter}
        color="secondry-color"
        title={t("common.filters")}
        onClick={toggleFilters}
      />
      <IconButton
        icon={faArrowDownShortWide}
        color="secondry-color"
        title={t("common.sort")}
        onClick={toggleOpen}
      />

      {isOpen && (
        <div className="post-sort">
          {postSortOptions?.map((e) => (
            <h3
              key={e.set}
              className={`${value === e.set ? "active" : ""}`}
              onClick={() => handleSetSort({ [e.name]: e.set })}
            >
              {t(`common.${e.title}`)}
              {value === e.set && <FontAwesomeIcon icon={faCheck} />}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPostsHeader;

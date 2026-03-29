import {
  faArrowDownShortWide,
  faCheck,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../../../components/buttons/IconButton";
import { useClickOutside } from "../../../../../hooks/useClickOutside";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const postSortOptions = [
  {
    title: "latest",
    set: "-created_at",
  },
  {
    title: "oldest",
    set: "created_at",
  },
  {
    title: "most liked",
    set: "-view_count",
  },
  {
    title: "least liked",
    set: "view_count",
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

  return (
    <div className="icons" ref={ref}>
      <IconButton
        icon={faFilter}
        color="secondry-color"
        title="filters"
        onClick={toggleFilters}
      />
      <IconButton
        icon={faArrowDownShortWide}
        color="secondry-color"
        title="sort"
        onClick={toggleOpen}
      />
      {isOpen && (
        <div className="post-sort">
          {postSortOptions?.map((e) => (
            <h3
              key={e.set}
              className={`${sort === e.set ? "active" : ""}`}
              onClick={() => handleSetSort(e.set)}
            >
              {e.title}
              {sort === e.set && <FontAwesomeIcon icon={faCheck} />}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPostsHeader;

import { useSearchParams } from "react-router";
import Breadcrumbs from "./../../../../components/breadcrumbs/Breadcrumbs";
import "../style/style.css";
import IconButton from "./../../../../components/buttons/IconButton";
import {
  faArrowDownShortWide,
  faCheck,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import PopUp from "../../../../components/popup/PopUp";
import Input from "../../../../components/inputs/Input";
import Button from "../../../../components/buttons/Button";
import { useCallback, useState } from "react";
import { useClickOutside } from "./../../../../hooks/useClickOutside";
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
];

const AllPosts = () => {
  const [searchParams] = useSearchParams();

  const [sort, setSort] = useState("-created_at");
  const category = searchParams.get("category");

  const [openFilters, setOpenFilters] = useState(false);

  const toggleFilters = useCallback(() => setOpenFilters((p) => !p), []);
  const { isOpen, ref, toggleOpen } = useClickOutside();

  const handleSetSort = useCallback(
    (state) => {
      setSort(state);
      toggleOpen();
    },
    [toggleOpen],
  );

  return (
    <>
      <Breadcrumbs />
      <section className="main-section container">
        <div className="post-filters">
          <h1 data-count={1000}>results</h1>
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
        </div>
      </section>

      <PopUp
        isOpen={openFilters}
        className="filters-popup"
        onClose={toggleFilters}
      >
        <div className="filters-container">
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
          <Input placeholder="dasdas" />
        </div>
        <div className="btns">
          <Button>save</Button>
          <Button
            btnStyleType="transparent"
            btnType="cancel"
            onClick={toggleFilters}
          >
            cancel
          </Button>
        </div>
      </PopUp>
    </>
  );
};

export default AllPosts;

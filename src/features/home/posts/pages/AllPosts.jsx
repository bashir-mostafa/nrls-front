import { useCallback, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import { useDebounce } from "use-debounce";
import { useInfiniteFetch } from "../../../../hooks/useInfiniteFetch";
import endPoints from "../../../../constant/endPoints";
import { formatInputsData } from "../../../../utils/formatInputsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../../../constant/icons";
import { dashboardRouts } from "../../../../constant/pageRoutes";
import PostCard from "../../../../components/post/PostCard";
import RepeatChildren from "../../../../components/RepeatChildren";
import Skeleton from "../../../../components/skeleton/Skeleton";
import AllPostsHeader from "./../components/AllPostsHeader";
import PostFilters from "../components/PostFilters";
import { useTranslation } from "react-i18next";
import "../style/style.css";

const AllPosts = () => {
  const { i18n } = useTranslation();
  const language = useMemo(() => i18n.language, [i18n.language]);

  const { state } = useLocation();
  const { tags, content_type, category } = state || {};

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search") ?? "";

  const [debouncedValue] = useDebounce(searchParam, 500);

  const [filters, setFilters] = useState({ tags, content_type, category });

  const finalFilters = useMemo(
    () => ({
      ...filters,
      search: debouncedValue,
    }),
    [filters, debouncedValue],
  );

  const [sort, setSort] = useState({ created_at: "-created_at" });

  const { data, isFetching, loadMoreRef } = useInfiniteFetch({
    endPoint: endPoints.posts,
    page_size: 5,
    ...formatInputsData(finalFilters),
    ordering: sort,
    language,
  });

  const results = useMemo(
    () => ({
      count: data?.pages?.[0]?.totalCount,
      posts: data?.pages?.flatMap((page) => page.data) || [],
    }),
    [data],
  );

  const [openFilters, setOpenFilters] = useState(false);

  const toggleFilters = useCallback(() => setOpenFilters((p) => !p), []);

  const handleSearch = useCallback(
    (e) => {
      const { value } = e.target;
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        value ? params.set("search", value) : params.delete("search");
        return params;
      });
    },
    [setSearchParams],
  );

  return (
    <>
      <h1
        className="post-section-name"
        style={{ "--color": `var(--color-${filters?.content_type})` }}
      >
        {filters?.content_type}
      </h1>

      <div className="post-filters">
        <div className="post-search">
          <label htmlFor="search-inp" className="search-inp">
            <input
              type="text"
              id="search-inp"
              placeholder="search...."
              value={searchParam}
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={icons.search} />
          </label>
          <AllPostsHeader
            sort={sort}
            setSort={setSort}
            toggleFilters={toggleFilters}
          />
        </div>
        <h1 data-count={results?.count || 0}>results</h1>
      </div>

      <div className="posts-container">
        {results?.posts?.map((e) => (
          <PostCard
            key={e.id}
            data={e}
            authorPage={dashboardRouts.author.view}
            postPage={dashboardRouts.post.view}
          />
        ))}
        {isFetching && (
          <RepeatChildren count={4}>
            <Skeleton height="100%" style={{ minHeight: "100px" }} />
          </RepeatChildren>
        )}
      </div>
      <div ref={loadMoreRef} />

      {openFilters && (
        <PostFilters
          onClose={toggleFilters}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </>
  );
};

export default AllPosts;

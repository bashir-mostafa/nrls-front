import { useInfiniteFetch } from "./../../../../../hooks/useInfiniteFetch";
import endPoints from "./../../../../../constant/endPoints";
import { useCallback, useMemo, useState } from "react";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import PostCard from "../../../../../components/post/PostCard";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import RepeatChildren from "../../../../../components/RepeatChildren";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import "../style/style.css";
import { formatInputsData } from "./../../../../../utils/formatInputsData";
import AllPostsHeader from "../components/AllPostsHeader";
import DeletePost from "../components/DeletePost";
import PostFilters from "../components/PostFilters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../../../../constant/icons";
import { useLocation } from "react-router";
import { useDebounce } from "use-debounce";
import { useTranslation } from "react-i18next";

const AllPosts = () => {
  const { state } = useLocation();
  const [search, setSearch] = useState("");
  const [debouncedValue] = useDebounce(search, 500);
  const { t } = useTranslation();
  const { tags } = state || {};

  const [filters, setFilters] = useState({ tags });

  const finalFilters = useMemo(
    () => ({
      ...filters,
      search: debouncedValue,
    }),
    [filters, debouncedValue],
  );

  const [sort, setSort] = useState({ published_at: "-published_at" });

  const { data, isFetching, loadMoreRef } = useInfiniteFetch({
    endPoint: endPoints.posts,
    page_size: 5,
    ...formatInputsData(finalFilters),
    ordering: sort,
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

  const [deletedId, setDeletedId] = useState(null);

  const handleSearch = useCallback((e) => {
    const { value } = e.target;
    setSearch(value);
  }, []);

  return (
    <>
      <Breadcrumbs />

      <div className="post-filters">
        <div className="post-search">
          <label htmlFor="search-inp" className="search-inp">
            <input
              type="text"
              id="search-inp"
              placeholder={t("common.search")}
              value={search}
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={icons.search} />
          </label>
          <AllPostsHeader
            setSort={setSort}
            toggleFilters={toggleFilters}
            sort={sort}
          />
        </div>
        <h1 data-count={results?.count || 0}>{t("common.results")}</h1>
      </div>

      <div className="posts-container">
        {results?.posts?.map((e) => (
          <PostCard
            key={e.id}
            data={e}
            authorPage={dashboardRouts.author.view}
            postPage={(e) => dashboardRouts.post.view(e.id)}
            showStatus
            showActions
            setDeletedId={(id) => setDeletedId(id)}
          />
        ))}
        {isFetching && (
          <RepeatChildren count={4}>
            <Skeleton height="100%" style={{ minHeight: "100px" }} />
          </RepeatChildren>
        )}
      </div>
      <div ref={loadMoreRef} />

      <DeletePost deletedId={deletedId} setDeletedId={setDeletedId} />

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

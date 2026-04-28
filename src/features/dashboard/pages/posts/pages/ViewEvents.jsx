import { useParams } from "react-router";
import { useInfiniteFetch } from "../../../../../hooks/useInfiniteFetch";
import endPoints from "../../../../../constant/endPoints";
import { useMemo } from "react";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import EventComponent from "../components/EventComponent";
import Skeleton from "../../../../../components/skeleton/Skeleton";

const ViewEvents = () => {
  const { id } = useParams();

  const { data, isFetching, loadMoreRef } = useInfiniteFetch({
    endPoint: endPoints.events,
    page_size: 1,
    post: id,
  });

  const results = useMemo(() => data?.pages?.flatMap((e) => e.data), [data]);

  if (!results?.length) return;

  return (
    <>
      <Breadcrumbs
        replace={[
          { from: id, text: results?.[0]?.post_title, fullTextReplace: true },
        ]}
      />
      <aside className="post-sidebar events-container">
        {results?.map((e) => (
          <EventComponent data={e} actions />
        ))}
        {isFetching && <Skeleton height="100px" />}
        <div ref={loadMoreRef} />
      </aside>
    </>
  );
};

export default ViewEvents;

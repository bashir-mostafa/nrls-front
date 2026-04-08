import { useLocation, useParams } from "react-router";
import { useInfiniteFetch } from "../../../../hooks/useInfiniteFetch";
import endPoints from "../../../../constant/endPoints";
import { useMemo } from "react";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import ViewSurveyWithOptions from "../../../dashboard/pages/posts/components/ViewSurveyWithOptions";
import Skeleton from "../../../../components/skeleton/Skeleton";

const PostSurvey = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const { data, isFetching, loadMoreRef } = useInfiniteFetch({
    endPoint: `${endPoints.surveyPost}${id}/`,
    page_size: 2,
  });

  const results = useMemo(() => data?.pages?.flatMap((e) => e.data), [data]);

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: state }]} />
      <section className="main-section container">
        <main className="survey-container ">
          {results?.map((e) => (
            <section key={e.id} className="survey-section">
              <ViewSurveyWithOptions data={e} />
            </section>
          ))}
        </main>
        {isFetching && <Skeleton height="100px" />}
        <div ref={loadMoreRef} />
      </section>
    </>
  );
};

export default PostSurvey;

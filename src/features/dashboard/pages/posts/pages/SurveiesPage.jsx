import { useLocation, useParams } from "react-router";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import { useInfiniteFetch } from "../../../../../hooks/useInfiniteFetch";
import endPoints from "../../../../../constant/endPoints";
import { useMemo } from "react";
import Skeleton from "../../../../../components/skeleton/Skeleton";
import ViewSurveyWithOptions from "../components/ViewSurveyWithOptions";

const SurveiesPage = () => {
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
      <main className="survey-container ">
        {results?.map((e) => (
          <section key={e.id} className="survey-section">
            <ViewSurveyWithOptions data={e} canUpdate />
          </section>
        ))}
      </main>
      {isFetching && <Skeleton height="100px" />}
      <div ref={loadMoreRef} />
    </>
  );
};

export default SurveiesPage;

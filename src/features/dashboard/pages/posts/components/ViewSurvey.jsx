import endPoints from "../../../../../constant/endPoints";
import "../style/survey.css";
import { useMemo } from "react";
import Button from "../../../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import { useFetchData } from "../../../../../hooks/useFetchData";
import ViewSurveyWithOptions from "./ViewSurveyWithOptions";

const ViewSurvey = ({ id }) => {
  const { data } = useFetchData({
    endPoints: `${endPoints.surveyPost}${id}/`,
    page_size: 1,
  });

  const firstSurvey = useMemo(() => data?.data?.[0], [data]);

  if (!data?.totalCount) return;

  return (
    <main className="survey-container border-bottom">
      {<ViewSurveyWithOptions data={firstSurvey} canUpdate />}
      <div className="update-icon">
        <Link
          to={dashboardRouts.post.viewSurvey(id)}
          state={firstSurvey?.post_title}
        >
          <Button btnStyleType="transparent">
            <FontAwesomeIcon icon={faListUl} /> view surveies (
            {data?.totalCount})
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default ViewSurvey;

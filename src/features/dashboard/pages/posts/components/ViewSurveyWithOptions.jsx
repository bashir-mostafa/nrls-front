import { faClock } from "@fortawesome/free-solid-svg-icons";
import { getPercent } from "../../../../../utils/getPercent";
import { isFutureTime } from "../../../../../utils/isFutureTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormatter from "../../../../../utils/dateFormatter";
import { useFetchData } from "../../../../../hooks/useFetchData";
import endPoints from "../../../../../constant/endPoints";
import { useCallback, useMemo, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../../../utils/axios";
import Button from "../../../../../components/buttons/Button";
import { Link } from "react-router";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import IconButton from "../../../../../components/buttons/IconButton";
import { icons } from "../../../../../constant/icons";

const ViewSurveyWithOptions = ({ data, canUpdate }) => {
  const [selected, setSelected] = useState(null);

  const { data: optionsRes } = useFetchData({
    endPoints: `${endPoints.surveyOptionsById}${data?.id}/`,
    ordering: { vote_count: "-vote_count" },
    enabled: Boolean(data?.id),
  });

  const options = useMemo(() => optionsRes?.data, [optionsRes]);

  const voteCount = useMemo(
    () => options?.reduce((acc, el) => acc + (el?.vote_count || 0), 0) || 1,
    [options],
  );

  const handleSelectVote = useCallback(
    (id) => {
      if (!isFutureTime(data?.closes_at)) {
        return enqueueSnackbar(
          "The voting period has ended. You can no longer participate.",
          { variant: "info" },
        );
      }

      setSelected((p) => (p === id ? null : id));
    },
    [data],
  );

  const cancel = useCallback(() => setSelected(null), []);
  const query = useQueryClient();

  const handleVote = useMutation({
    mutationFn: async () => {
      await axiosInstance.post(`${endPoints.vote}${selected}/`);
    },
    onSuccess: () => {
      cancel();
      query.invalidateQueries([endPoints.surveyOptionsById, data?.post]);
    },
  });

  if (!data) return;

  return (
    <>
      {canUpdate && (
        <div className="update-icon">
          <Link
            to={dashboardRouts.post.updateSurvey(data?.post, data?.id)}
            state={{ data, options }}
          >
            <IconButton
              icon={icons.update}
              color="update"
              styleType="transparent"
              title="update"
            />
          </Link>
        </div>
      )}

      <h2 className="question"> {data?.question} </h2>
      <section className="options">
        {options?.map((e) => {
          const percent = `${parseInt(getPercent(e.vote_count, voteCount))}%`;
          return (
            <div
              className={`option ${e.id === selected ? "active" : ""}`}
              key={e.id}
              onClick={() => handleSelectVote(e.id)}
            >
              <div className="flex align-center gap-10 flex-1 wrap">
                {isFutureTime(data?.closes_at) && <p></p>}
                {e.option_text}
              </div>
              <span> {e.vote_count} vote </span>
              <p className="percent" style={{ width: percent }}></p>
              <p className="percent-value"> {percent} </p>
            </div>
          );
        })}

        <div className="closes-at">
          <h3 className="colon-after">
            <FontAwesomeIcon icon={faClock} /> closes_at
          </h3>
          <p
            style={{
              color: isFutureTime(data?.closes_at) ? "green" : "red",
            }}
          >
            {dateFormatter(data?.closes_at)}
          </p>
        </div>

        {selected && (
          <div className="btns">
            <Button
              btnStyleType="transparent"
              btnType="cancel"
              onClick={cancel}
            >
              cancel
            </Button>
            <Button onClick={handleVote.mutate}> vote </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default ViewSurveyWithOptions;

import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { icons } from "../../constant/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import endPoints from "../../constant/endPoints";
import { useTranslation } from "react-i18next";
const CommentActions = ({ data, setDeletePopup }) => {
  const query = useQueryClient();
  const approveStatus = useMutation({
    mutationFn: async (is_approved) => {
      await axiosInstance.patch(`${endPoints.comment}${data.id}/`, {
        is_approved,
      });
    },
    onSuccess: () => {
      query.invalidateQueries(endPoints.comment);
    },
  });
  const { t } = useTranslation();
  return (
    <div>
      <p onClick={setDeletePopup}>
        <FontAwesomeIcon icon={icons.delete} />
        {t("common.delete")}
      </p>
      {data.is_approved ? (
        <p onClick={() => approveStatus.mutate(false)}>
          <FontAwesomeIcon icon={faCircleXmark} />
          {t("common.reject")}
        </p>
      ) : (
        <p className="accept" onClick={() => approveStatus.mutate(true)}>
          <FontAwesomeIcon icon={faCircleCheck} />
          {t("common.accept")}
        </p>
      )}
    </div>
  );
};

export default CommentActions;

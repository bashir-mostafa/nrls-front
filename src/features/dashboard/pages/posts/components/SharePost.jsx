import { useCallback } from "react";
import Button from "../../../../../components/buttons/Button";
import { icons } from "../../../../../constant/icons";
import { homeRoutes } from "../../../../../constant/pageRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const SharePost = ({ name, id }) => {
  const { t } = useTranslation();
  const handleShare = useCallback(async () => {
    const url = `${window.location.origin}${homeRoutes.posts.view(name, id)}`;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
    }
  }, [id, name]);

  return (
    <Button
      btnStyleType="transparent"
      className="flex-1"
      btnType="save"
      onClick={handleShare}
    >
      <FontAwesomeIcon icon={icons.share} /> {t("common.share")}
    </Button>
  );
};

export default SharePost;

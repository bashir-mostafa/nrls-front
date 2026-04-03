import { useCallback } from "react";
import Button from "../../../../../components/buttons/Button";
import { icons } from "../../../../../constant/icons";
import { homeRoutes } from "../../../../../constant/pageRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SharePost = ({ id }) => {
  const handleShare = useCallback(async () => {
    const url = `${window.location.origin}${homeRoutes.posts.view(id)}`;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
    }
  }, [id]);

  return (
    <Button
      btnStyleType="transparent"
      className="flex-1"
      btnType="save"
      onClick={handleShare}
    >
      <FontAwesomeIcon icon={icons.share} /> share
    </Button>
  );
};

export default SharePost;

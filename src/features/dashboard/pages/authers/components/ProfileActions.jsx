import {
  faExpand,
  faImage,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import imgServerSrc from "../../../../../utils/imgServerSrc";
import ImgViewPopup from "../../../../../components/popup/ImgViewPopup";
import { useTranslation } from "react-i18next";

const ProfileActions = ({
  newImg,
  profile_image,
  isOpen,
  setNewImg,
  onDelete,
}) => {
  const [opendImg, setOpendImg] = useState(null);

  const handleView = useCallback(() => {
    setOpendImg(newImg || imgServerSrc(profile_image));
  }, [newImg, profile_image]);

  const handleDelete = useCallback(() => {
    if (newImg) return setNewImg(null);
    else onDelete();
  }, [setNewImg, newImg, onDelete]);

  const { t } = useTranslation();

  return (
    <>
      {isOpen && (
        <div className="actions">
          {(newImg || profile_image) && (
            <>
              <div className="action" onClick={handleView}>
                <FontAwesomeIcon icon={faExpand} />
                {t("author.view_profile_image")}
              </div>
              <div className="action delete" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrashCan} />
                {t("author.delete_profile_image")}
              </div>
            </>
          )}

          <label htmlFor="profile_image" className="action change-profile">
            <FontAwesomeIcon icon={faImage} />
            {t("author.change_profile_image")}
          </label>
        </div>
      )}

      <ImgViewPopup src={opendImg} onClose={() => setOpendImg(null)} />
    </>
  );
};

export default ProfileActions;

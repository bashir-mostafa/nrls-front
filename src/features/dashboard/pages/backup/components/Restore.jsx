import { useCallback, useState } from "react";
import PopUp from "../../../../../components/popup/PopUp";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../../../../../components/buttons/Button";
import ConfirmPopUp from "../../../../../components/popup/ConfirmPopUp";
import axiosInstance from "../../../../../utils/axios";
import endPoints from "../../../../../constant/endPoints";

const Restore = ({ restore, setRestore }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      backup_file: restore?.filename,
      include_media: false,
    },
    onSubmit: () => setIsOpen(true),
  });

  const onClose = useCallback(() => {
    setIsOpen(false);
    setRestore(null);
  }, [setRestore]);
  const query = useQueryClient();

  const confirm = useMutation({
    mutationFn: async () =>
      await axiosInstance.post(`${endPoints.backup}restore/`, formik.values),
    onSuccess: () => {
      query.clear();
      onClose();
    },
  });

  return (
    <>
      <PopUp isOpen={restore} className="backup-popup" onClose={onClose}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="include_media" className="backup-checkbox">
            <input
              type="checkbox"
              name="include_media"
              id="include_media"
              value={formik.values.include_media}
              checked={formik.values.include_media}
              onChange={formik.handleChange}
            />
            include_media
          </label>

          <div className="btns">
            <Button type="submit" btnType="delete" btnStyleType="transparent">
              restore
            </Button>
            <Button
              btnStyleType="transparent"
              btnType="cancel"
              onClick={onClose}
            >
              cancel
            </Button>
          </div>
        </form>
      </PopUp>

      <ConfirmPopUp
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={confirm.mutate}
      />
    </>
  );
};

export default Restore;

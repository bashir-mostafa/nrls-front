import { useCallback } from "react";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ConfirmPopUp from "../../../../../components/popup/ConfirmPopUp";
import axiosInstance from "../../../../../utils/axios";
import endPoints from "../../../../../constant/endPoints";

const Replace = ({ replace, setReplace }) => {
  const formik = useFormik({
    initialValues: {
      backup_file: replace?.filename,
      confirmation: true,
    },
    onSubmit: (v) => confirm.mutate(v),
  });

  const onClose = useCallback(() => {
    setReplace(null);
  }, [setReplace]);
  const query = useQueryClient();

  const confirm = useMutation({
    mutationFn: async (d) =>
      await axiosInstance.post(`${endPoints.backup}replace/`, d),
    onSuccess: () => {
      query.clear();
      onClose();
    },
  });

  return (
    <>
      <ConfirmPopUp
        isOpen={replace}
        onClose={onClose}
        onConfirm={formik.handleSubmit}
        confirmText="replace"
      />
    </>
  );
};

export default Replace;

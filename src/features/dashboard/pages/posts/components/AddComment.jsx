import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../../../components/buttons/Button";
import Input from "../../../../../components/inputs/Input";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { commentSchema } from "../../../../../schema/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import { useTranslation } from "react-i18next";

const AddComment = ({ id, api, handleShowAddForm }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
      is_approved: true,
      post: id,
    },
    validationSchema: commentSchema,
    onSubmit: (v) => handleSubmit.mutate(v),
  });

  const query = useQueryClient();

  const handleSubmit = useMutation({
    mutationFn: (d) => api.addData(d),
    onSuccess: () => {
      query.invalidateQueries(endPoints.comment);
      formik.resetForm();
      handleShowAddForm();
    },
  });
const {t} = useTranslation();
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex-container">
        <Input
          name="name"
          errorText={formik.errors.name}
          value={formik.values.name}
          placeholder={t("common.write_your_name")}
          label={t("common.your_name")}
          onChange={formik.handleChange}
        />
        <Input
          name="email"
          errorText={formik.errors.email}
          value={formik.values.email}
          placeholder={t("common.write_your_email")}
          label={t("common.your_email")}
          onChange={formik.handleChange}
        />
      </div>
      <Input
        name="comment"
        errorText={formik.errors.comment}
        value={formik.values.comment}
        placeholder={t("common.write_your_comment")}
        label={t("common.your_comment")}
        onChange={formik.handleChange}
        elementType="textarea"
        rows={5}
      />
      <div className="btn-container">
        <Button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> {t("common.submit_comment")}
        </Button>
      </div>
    </form>
  );
};

export default AddComment;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import APIClient from "../../../../../utils/ApiClient";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import Input from "../../../../../components/inputs/Input";
import Button from "../../../../../components/buttons/Button";
import { tagsSchema } from "../../../../../schema/tags";

const api = new APIClient(endPoints.tags);

const AddTag = () => {
  const formik = useFormik({
    initialValues: {
      name_ar: "",
      name_ku: "",
      name_en: "",
    },
    validationSchema: tagsSchema,
    onSubmit: (d) => handleConfirm.mutate(d),
  });

  const query = useQueryClient();
  const nav = useNavigate();

  const handleConfirm = useMutation({
    mutationFn: (d) => api.addData(d),
    onSuccess: () => {
      query.invalidateQueries([endPoints.tags]);
      nav(-1);
    },
  });

  const { t } = useTranslation();

  return (
    <>
      <Breadcrumbs />

      <form className="dashboard-form" onSubmit={formik.handleSubmit}>
        <div className="inputs-area">
          <Input
            name="name_ar"
            value={formik.values.name_ar}
            onChange={formik.handleChange}
            errorText={t(formik.errors.name_ar)}
            label={t("name_ar")}
            placeholder={t("name_ar_placeholder")}
          />
          <Input
            name="name_en"
            value={formik.values.name_en}
            onChange={formik.handleChange}
            errorText={t(formik.errors.name_en)}
            label={t("name_en")}
            placeholder={t("name_en_placeholder")}
          />
          <Input
            name="name_ku"
            value={formik.values.name_ku}
            onChange={formik.handleChange}
            errorText={t(formik.errors.name_ku)}
            label={t("name_ku")}
            placeholder={t("name_ku_placeholder")}
          />

        </div>
        <Button type="submit"> save </Button>
      </form>
    </>
  );
};

export default AddTag;

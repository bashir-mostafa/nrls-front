import { useMutation, useQueryClient } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import APIClient from "../../../../../utils/ApiClient";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import Input from "../../../../../components/inputs/Input";
import Button from "../../../../../components/buttons/Button";
import { categoriesSchema } from "./../../../../../schema/categories";
import SelectInputApi from "./../../../../../components/inputs/SelectInputApi";
import { useMemo } from "react";

const api = new APIClient(endPoints.categories);

const AddCategory = () => {
  const formik = useFormik({
    initialValues: {
      name_ar: "",
      name_ku: "",
      name_en: "",
      content_type: "",
    },
    validationSchema: categoriesSchema,
    onSubmit: (d) =>
      handleConfirm.mutate({ ...d, content_type: d.content_type?.id }),
  });

  const query = useQueryClient();
  const nav = useNavigate();

  const handleConfirm = useMutation({
    mutationFn: (d) => api.addData(d),
    onSuccess: () => {
      query.invalidateQueries([endPoints.categories]);
      nav(-1);
    },
  });

  const { t, i18n } = useTranslation();
  const language = useMemo(() => i18n.language, [i18n]);

  return (
    <>
      <Breadcrumbs />

      <form className="dashboard-form" onSubmit={formik.handleSubmit}>
        <div className="inputs-area">
          <SelectInputApi
            endPoint={endPoints.contentType}
            onChange={(e) => formik.setFieldValue("content_type", e)}
            placeholder={
              formik.values.content_type?.[`name_${language}`] ||
              `${t("common.select")} ${t("common.content_type")}`
            }
            errorText={t(formik.errors.content_type)}
            label={t("common.content_type")}
            optionLabel={(e) => `${e?.name_en} - ${e?.name_ar} - ${e?.name_ku}`}
          />
          <Input
            name="name_ar"
            value={formik.values.name_ar}
            onChange={formik.handleChange}
            errorText={t(formik.errors.name_ar)}
            label={t("tags.name_ar")}
            placeholder={t("tags.name_ar_placeholder")}
          />
          <Input
            name="name_en"
            value={formik.values.name_en}
            onChange={formik.handleChange}
            errorText={t(formik.errors.name_en)}
            label={t("tags.name_en")}
            placeholder={t("tags.name_en_placeholder")}
          />
          <Input
            name="name_ku"
            value={formik.values.name_ku}
            onChange={formik.handleChange}
            errorText={t(formik.errors.name_ku)}
            label={t("tags.name_ku")}
            placeholder={t("tags.name_ku_placeholder")}
          />
        </div>
        <Button type="submit"> {t("common.save")} </Button>
      </form>
    </>
  );
};

export default AddCategory;

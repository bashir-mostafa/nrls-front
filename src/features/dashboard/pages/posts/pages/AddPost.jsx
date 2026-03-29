import { useMutation, useQueryClient } from "@tanstack/react-query";
import endPoints from "../../../../../constant/endPoints";
import APIClient from "../../../../../utils/ApiClient";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../../../../components/breadcrumbs/Breadcrumbs";
import Button from "../../../../../components/buttons/Button";
import { postSchema } from "./../../../../../schema/post";
import EditorSection from "./../components/EditorSection";
import { useMemo, useState } from "react";
import InfoInputsSection from "./../components/InfoInputsSection";
import MoreInfoInputs from "./../components/MoreInfoInputs";
import "../style/style.css";
import PostTabs from "./../components/PostTabs";
import UploadPhoto from "../../../../../components/inputs/UploadPhoto";
import { formatInputsData } from "./../../../../../utils/formatInputsData";
import PostCard from "../../../../../components/post/PostCard";

const api = new APIClient(endPoints.posts);

const AddPost = () => {
  const [tab, setTab] = useState("format");
  const { t, i18n } = useTranslation();

  const language = useMemo(() => i18n.language, [i18n]);

  const formik = useFormik({
    initialValues: {
      featured_image: "",
      title: "",
      excerpt: "",
      content: "",
      original_post: "",
      content_type: "",
      category: "",
      author: "",
      language,
      published_at: "",
      is_published: true,
      tags: [],
    },
    validationSchema: postSchema,
    onSubmit: (d) => {
      const data = formatInputsData(d);
      const form = new FormData();

      Object.entries(data).map(([key, value]) => {
        if (key !== "featured_image") {
          form.append(key, value);
        }
      });

      if (d.featured_image?.file) {
        form.append("featured_image", d.featured_image.file);
      }

      handleConfirm.mutate(form);
    },
  });
  const query = useQueryClient();
  const nav = useNavigate();

  const handleConfirm = useMutation({
    mutationFn: (d) => api.addData(d),
    onSuccess: () => {
      query.invalidateQueries([endPoints.posts]);
      nav(-1);
    },
  });

  return (
    <>
      <Breadcrumbs />

      <PostTabs errors={formik.errors} setTab={setTab} tab={tab} />

      <form className="dashboard-form" onSubmit={formik.handleSubmit}>
        {tab === "format" && <EditorSection formik={formik} t={t} />}

        {tab === "info" && (
          <InfoInputsSection formik={formik} language={language} t={t} />
        )}

        {tab === "moreInfo" && <MoreInfoInputs formik={formik} t={t} />}
        {tab === "image" && (
          <UploadPhoto
            name="featured_image"
            title="featured_image"
            errorText={t(formik.errors?.featured_image)}
            notRequired
            value={formik.values.featured_image}
            onChange={(e) => formik.setFieldValue("featured_image", e)}
            className="post-cover-img"
            revoke={false}
          />
        )}

        {tab === "view" && (
          <div className="posts-container">
            <PostCard
              data={formik.values}
              isDraft
              img={formik.values?.featured_image?.url}
              showStatus={true}
            />
          </div>
        )}

        <Button type="submit"> save </Button>
      </form>
    </>
  );
};

export default AddPost;

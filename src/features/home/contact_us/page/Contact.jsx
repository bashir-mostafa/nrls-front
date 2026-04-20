import { useFormik } from "formik";
import * as yup from "yup";
import "../style/style.css";
import Forms from "../components/Forms";
import Socials from "../components/Socials";
import Breadcrumbs from "./../../../../components/breadcrumbs/Breadcrumbs";
import axiosInstance from "../../../../utils/axios";
import endPoints from "./../../../../constant/endPoints";

const Contact = () => {
  const formik = useFormik({
    initialValues: { email: "", message: "" },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("validation.email")
        .required("validation.required"),
      message: yup
        .string()
        .required("validation.required")
        .min(2, "validation.min_length"),
    }),
    onSubmit: async (v, { resetForm }) => {
      await axiosInstance.post(endPoints.email, v);
      resetForm();
    },
  });

  return (
    <>
      <Breadcrumbs />
      <section className="container main-section">
        <form className="contact-page" onSubmit={formik.handleSubmit}>
          <Forms formik={formik} />
          <Socials />
        </form>
      </section>
    </>
  );
};

export default Contact;

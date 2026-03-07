import { useFormik } from "formik";
import * as yup from "yup";
import "../style/style.css";
import Forms from "../components/Forms";
import Socials from "../components/Socials";



const Contact = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      subject: yup.string().notRequired(),
      message: yup.string().required(),
    }),
  });

  return (
    <section className="container main-section">
      <form className="contact-page" onSubmit={formik.handleSubmit}>
        <Forms formik={formik} />
        <Socials />
      </form>
    </section>
  );
};

export default Contact;

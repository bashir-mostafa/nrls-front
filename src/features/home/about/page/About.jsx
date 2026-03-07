import Breadcrumbs from "./../../../../components/breadcrumbs/Breadcrumbs";
import Img from "../../../../assets/aboutjpg.jpg";
import "../style/style.css";
import { socialLinks } from "./../../../../constant/socialLinks";
import AboutInfo from "../components/AboutInfo";

const About = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="container main-section about-page">
        <h1> من نحن </h1>
        <main>
          <AboutInfo />
          <div className="img">
            <img src={Img} alt="" />
          </div>
        </main>
      </section>
      <section className="about-contact container">
        <h2> يمكنك التواصل معنا عبر البريد الإلكتروني </h2>
        <a href={socialLinks.email.to}> {socialLinks.email.text} </a>
      </section>
    </>
  );
};

export default About;

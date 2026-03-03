import "../style/home.css";
import BreakingNews from "../components/BreakingNews";
import MainNews from "../components/MainNews";
import SubNews from "../components/SubNews";
import MainTitle from "./../../../../components/main_title/MainTitle";
import Img from "../../../../assets/1.jpg";
import ReportNews from "../components/ReportNews";
import Topics from "../components/Topics";
import Documentaries from "../components/Documentaries";

const Home = () => {
  return (
    <>
      <section className="last-news-container container main-section">
        <BreakingNews />
        <div className="last-news">
          <MainNews />
          <div className="sub-news-container">
            <SubNews />
            <SubNews />
          </div>
        </div>
      </section>

      <section className="container main-section body-color">
        <MainTitle>تقارير</MainTitle>
        <ReportNews />
      </section>

      <section className="container main-section">
        <MainTitle>موضوعات وقضايا</MainTitle>
        <Topics />
      </section>

      <section className="container main-section documentaries">
        <MainTitle> وثائقيات ولقاءات</MainTitle>
        <Documentaries />
      </section>
    </>
  );
};

export default Home;

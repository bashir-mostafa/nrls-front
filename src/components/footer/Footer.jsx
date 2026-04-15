import { Link } from "react-router";
import "./footer.css";
import Tooltip from "../tooltip/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../constant/socialLinks";
import { homeRoutes } from "../../constant/pageRoutes";
import { useAuth } from "../../context/AuthContext";
import { mediaTyps, publicationTyps, topicTyps } from "../../constant/enums";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="home-footer container">
      <main>
        <h2 className="title">NRLS</h2>
        <p>
          منصتك الأولى للأخبار الموثوقة والشاملة من جميع أنحاء العالم. نقدم لكم
          آخر المستجدات على مدار الساعة.
        </p>
        <div className="social-links">
          {Object.keys(socialLinks)?.map((e) => (
            <a href={socialLinks[e].to} target="_blank" key={e}>
              <Tooltip text={e}>
                <FontAwesomeIcon icon={socialLinks[e].icon} />
              </Tooltip>
            </a>
          ))}
        </div>
      </main>
      <main>
        <h2 className="title">روابط سريعة</h2>
        <div className="links">
          <Link to={"/"}>home</Link>
          <Link to={homeRoutes.about}>who are we</Link>
          <Link to={homeRoutes.contact}>contact us</Link>
          {user ? (
            <Link to={homeRoutes.dashboard}>dashboard</Link>
          ) : (
            <Link to={homeRoutes.login}>login</Link>
          )}
        </div>
      </main>
      <main>
        <h2>اقسام الموقع</h2>
        <div className="links">
          <Link to={"/event"}>event</Link>
          <Link to={"/survey"}>survey</Link>
          <Link to={"/topics"} state={{ content_type_multi: topicTyps }}>
            topics
          </Link>
          <Link to={"/media"} state={{ content_type_multi: mediaTyps }}>
            media
          </Link>
          <Link
            to={"/publication"}
            state={{ content_type_multi: publicationTyps }}
          >
            publication
          </Link>
        </div>
      </main>

      <article className="copyright"> جميع الحقوق محفوظة 2026</article>
    </footer>
  );
};

export default Footer;

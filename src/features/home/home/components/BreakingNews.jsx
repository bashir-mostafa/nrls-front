import { Link } from "react-router";
import { homeRoutes } from "../../../../constant/pageRoutes";
import { useTranslation } from "react-i18next";

const BreakingNews = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="breacking-news">
      <h3>{t("pages.breaking_news")}</h3>
      <div className="ticker">
        <article className="ticker-content">
          {data?.map((e) => (
            <Link key={e.id} to={homeRoutes.posts.view(e.content_type, e.id)}>
              {e.title?.length < 100 ? e.title : `${e.title.slice(0, 100)} ...`}
            </Link>
          ))}
        </article>
      </div>
    </div>
  );
};

export default BreakingNews;

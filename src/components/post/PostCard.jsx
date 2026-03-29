import { Link } from "react-router";
import "./style.css";
import imgServerSrc from "./../../utils/imgServerSrc";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const PostCard = ({ data, isDraft, authorPage, postPage, img, showStatus }) => {
  const { i18n } = useTranslation();
  const language = useMemo(() => i18n.language, [i18n]);

  return (
    <Link className="post-view-card" to={!isDraft && postPage(data?.id)}>
      <div className="img">
        {showStatus && (
          <p
            className={`post-status ${data?.is_published ? "published" : "draft"}`}
          >
            {data?.is_published ? "Published" : "Draft"}
          </p>
        )}
        <img src={img || imgServerSrc(data?.featured_image)} alt="" />
      </div>

      <CardBody
        authorPage={authorPage}
        data={data}
        isDraft={isDraft}
        language={language}
      />

      <CardFooter data={data} isDraft={isDraft} />
    </Link>
  );
};

export default PostCard;

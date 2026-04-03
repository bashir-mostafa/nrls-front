import { Link } from "react-router";
import dateFormatter from "../../../../../utils/dateFormatter";
import imgServerSrc from "../../../../../utils/imgServerSrc";

const PostViewMainInfo = ({ data, authorView, language }) => {
  return (
    <div className="post-info">
      {data?.author && (
        <Link className="author  link-hover" to={authorView(data?.author?.id)}>
          <article className="author-profile">
            {data?.author?.profile_image ? (
              <img alt="" src={imgServerSrc(data?.author?.profile_image)} />
            ) : (
              data?.author?.full_name?.[0]
            )}
          </article>
          {data?.author?.full_name}
        </Link>
      )}

      <div>
        <p> content_type </p>
        <span>{data?.content_type}</span>
      </div>
      <div>
        <p> category </p>
        <span>{data?.category?.[`name_${language}`]}</span>
      </div>
      <div>
        <p> views </p>
        <span>{data?.view_count}</span>
      </div>
      <div>
        <p> created_at </p>
        <span>{dateFormatter(data?.created_at, "fullDate")}</span>
      </div>
    </div>
  );
};

export default PostViewMainInfo;

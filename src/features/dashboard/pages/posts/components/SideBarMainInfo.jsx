import { Link } from "react-router";
import { colors } from "../../../../../constant/colors";
import dateFormatter from "../../../../../utils/dateFormatter";

const SideBarMainInfo = ({
  data,
  view,
  authorView,
  language,
  showPublishStatus,
}) => {
  return (
    <>
      <p className="section-title">post info</p>

      <div className="main-info">
        {data?.original_post && (
          <div>
            <p>original_post</p>
            <Link className="link-hover" to={view}>
              {data?.original_post?.title}
            </Link>
          </div>
        )}

        {showPublishStatus && (
          <div>
            <p>is_published</p>
            <span
              className="enum"
              style={{
                "--main-color":
                  colors[data?.is_published ? "green" : "red"].color,
              }}
            >
              {data?.is_published ? "yes" : "no"}
            </span>
          </div>
        )}

        <div>
          <p>content_type</p>
          <span
            className="enum"
            style={{
              "--main-color": `var(--color-${data?.content_type})`,
            }}
          >
            {data?.content_type}
          </span>
        </div>

        <div>
          <p>category</p>
          <span> {data?.category?.[`name_${language}`]} </span>
        </div>

        {data?.author && (
          <div>
            <p>author</p>
            <Link className="link-hover" to={authorView(data?.author?.id)}>
              {data?.author?.full_name}
            </Link>
          </div>
        )}

        {data?.published_at && (
          <div>
            <p>published_at</p>
            <span> {dateFormatter(data?.published_at)} </span>
          </div>
        )}

        <div>
          <p>created_at</p>
          <span> {dateFormatter(data?.created_at, "fullDate")} </span>
        </div>

        <div>
          <p>updated_at</p>
          <span> {dateFormatter(data?.updated_at, "fullDate")} </span>
        </div>

        <div>
          <p>view_count</p>
          <span> {data?.view_count} </span>
        </div>
      </div>
    </>
  );
};

export default SideBarMainInfo;

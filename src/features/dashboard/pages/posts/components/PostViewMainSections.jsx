import { useMemo, useState } from "react";
import PostViewMainInfo from "./PostViewMainInfo";
import imgServerSrc from "../../../../../utils/imgServerSrc";
import ImgViewPopup from "../../../../../components/popup/ImgViewPopup";
import PostComments from "./PostComments";
import "../style/style.css";

const PostViewMainSections = ({ data, authorView, language }) => {
  const [showImg, setShowImg] = useState(false);

  const imgSrc = useMemo(() => {
    return imgServerSrc(
      data?.featured_image || data?.original_post?.featured_image,
    );
  }, [data]);

  return (
    <>
      <main className="post-main-info">
        <h1 className="post-title border-bottom">{data?.title}</h1>

        {data?.excerpt && (
          <div className="border-bottom">
            <p className="excerpt"> {data?.excerpt} </p>
          </div>
        )}

        <PostViewMainInfo
          authorView={authorView}
          data={data}
          language={language}
        />

        <div className="cover-image" onClick={() => setShowImg(imgSrc)}>
          <img src={imgSrc} alt="" />
        </div>

        <div
          className="ql-editor border-bottom"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>

        {data?.tags?.length > 0 && (
          <div className="tags border-bottom">
            <p>tags</p>
            {data?.tags?.map((e) => (
              <button key={e.id}> {e[`name_${language}`]} </button>
            ))}
          </div>
        )}

        <PostComments id={data?.id} />
      </main>

      <ImgViewPopup src={showImg} onClose={() => setShowImg(false)} />
    </>
  );
};

export default PostViewMainSections;

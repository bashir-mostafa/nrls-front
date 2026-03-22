import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import APIClient from "../../../../../utils/ApiClient";
import endPoints from "../../../../../constant/endPoints";
import HandleError from "./../../../../../components/error/HandleError";
import Skeleton from "./../../../../../components/skeleton/Skeleton";
import Img from "../../../.././../assets/aboutjpg.jpg";
import "../style/style.css";
import Breadcrumbs from "./../../../../../components/breadcrumbs/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authorIcons } from "./../../../../../constant/authorIcons";
import ReadMoreText from "./../../../../../components/read_more/ReadMoreText";
import IconButton from "../../../../../components/buttons/IconButton";
import { icons } from "../../../../../constant/icons";
import { faImage, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "./../../../../../hooks/useClickOutside";
import { useRef } from "react";
const api = new APIClient(endPoints.authors);

const ViewAuthor = () => {
  const { id } = useParams();

  const { ref, toggleOpen, isOpen } = useClickOutside();

  const inpRef = useRef(null);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [endPoints.authors, id],
    queryFn: () => api.getOne(id),
  });

  if (isLoading) return <Skeleton height="300px" />;
  if (error) return <HandleError error={error} refetch={refetch} />;

  return (
    <>
      <Breadcrumbs replace={[{ from: id, text: data?.full_name }]} />
      <main className="author-profile">
        <section className="image-section">
          <div className="img">
            <div className="icons">
              <IconButton
                icon={icons.update}
                title="update"
                color="main"
                styleType="transparent"
              />
              <label
                htmlFor="profile_image"
                onClick={() => inpRef?.current?.click()}
              >
                <IconButton
                  icon={faImage}
                  title="update"
                  color="cancel"
                  styleType="transparent"
                />
              </label>
            </div>
            <div className="profile" ref={ref}>
              <div className="profile-photo flex" onClick={toggleOpen}>
                <img src={Img} alt="" />
              </div>
              {isOpen && (
                <div className="actions">
                  <label
                    htmlFor="profile_image"
                    className="action change-profile"
                  >
                    <FontAwesomeIcon icon={faImage} /> choose photo
                  </label>
                  <div className="action delete">
                    <FontAwesomeIcon icon={faTrashCan} /> delete profile
                  </div>
                </div>
              )}
            </div>
            <input
              type="file"
              id="profile_image"
              name="profile_image"
              ref={inpRef}
              hidden
            />
          </div>
          <div className="body">
            <h2>{data?.full_name}</h2>

            <a href={`mailto:${data?.email}`}>
              <FontAwesomeIcon icon={authorIcons.email} />
              {data?.email}
            </a>

            {data?.bio && <ReadMoreText word={data?.bio} letters={150} />}
          </div>
        </section>

        <section className="info-section">
          <h2>info</h2>
          <div>
            <FontAwesomeIcon icon={faImage} />
            <article>
              <p>id</p>
              <span>1</span>
            </article>
          </div>

          <div>
            <FontAwesomeIcon icon={faImage} />
            <article>
              <p>id</p>
              <span>1</span>
            </article>
          </div>
          <div>
            <FontAwesomeIcon icon={faImage} />
            <article>
              <p>id</p>
              <span>1</span>
            </article>
          </div>
          <div>
            <FontAwesomeIcon icon={faImage} />
            <article>
              <p>id</p>
              <span>1</span>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default ViewAuthor;

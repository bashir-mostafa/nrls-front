import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormatter from "../../../../utils/dateFormatter";
import Img from "../../../../assets/1.jpg";

const SubNews = () => {
  return (
    <div className="sub-news">
      <img src={Img} alt="" />
      <article>
        <button> type </button>
        <h2 className="one-line-ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, sint!
          Fugit at quas saepe consequatur dignissimos quis ratione explicabo
          consequuntur reiciendis blanditiis odit nulla vero maiores, nemo dolor
          totam obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur facere tempora architecto natus nulla adipisci
          laudantium sunt excepturi, fuga sequi esse, nisi non impedit voluptas
          totam earum maiores omnis ab!
        </h2>

        <div className="icons">
          <span>
            <FontAwesomeIcon icon={faClock} />
            {dateFormatter(new Date(), "fullDate")}
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            1040
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            1040
          </span>
        </div>
      </article>
    </div>
  );
};

export default SubNews;

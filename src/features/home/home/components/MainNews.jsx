import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "../../../../assets/1.jpg";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";
import dateFormatter from "../../../../utils/dateFormatter";

const MainNews = () => {
  return (
    <div className="main-news">
      <img src={Img} alt="" />
      <article>
        <button> type </button>
        <h2 className="two-line-ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, sint!
          Fugit at quas saepe consequatur dignissimos quis ratione explicabo
          consequuntur reiciendis blanditiis odit nulla vero maiores, nemo dolor
          totam obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur facere tempora architecto natus nulla adipisci
          laudantium sunt excepturi, fuga sequi esse, nisi non impedit voluptas
          totam earum maiores omnis ab!
        </h2>
        <p className="two-line-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          hic amet earum ipsam iure tempore quia delectus consequuntur dolorum
          quibusdam molestias nostrum voluptate cum corporis ratione illum,
          voluptatum nulla odio.
        </p>
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

export default MainNews;

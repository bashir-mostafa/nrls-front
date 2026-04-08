import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { homeRoutes } from "../../constant/pageRoutes";

const MainTitle = ({ children, name, ...props }) => {
  return (
    <Link className="main-title" to={homeRoutes.posts.page(name)} {...props}>
      {children} <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
};

export default MainTitle;

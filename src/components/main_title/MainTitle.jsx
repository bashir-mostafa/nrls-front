import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const MainTitle = ({ children, ...props }) => {
  return (
    <Link className="main-title" {...props}>
      {children} <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
};

export default MainTitle;

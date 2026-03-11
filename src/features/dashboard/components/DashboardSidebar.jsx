import { NavLink } from "react-router";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const name = "diyar direki";

const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <nav className="links">
        <NavLink>
          <FontAwesomeIcon icon={faBarsStaggered} /> <span>test</span>
        </NavLink>
        <NavLink to={"tesd2"}>
          <FontAwesomeIcon icon={faBarsStaggered} /> <span>test</span>
        </NavLink>
        <NavLink to={"tesd23"}>
          <FontAwesomeIcon icon={faBarsStaggered} /> <span>test</span>
        </NavLink>
        <NavLink to={"tesd234"}>
          <FontAwesomeIcon icon={faBarsStaggered} /> <span>test</span>
        </NavLink>
        <NavLink to={"tesd2345"}>
          <FontAwesomeIcon icon={faBarsStaggered} /> <span>test</span>
        </NavLink>
        <NavLink to={"tesd23455"}>
          <FontAwesomeIcon icon={faBarsStaggered} /> <span>test</span>
        </NavLink>
      </nav>
      <div className="user">
        <div className="profile"> {name[0]} </div>
        <article>
          <h3>{name}</h3>
          <p>admin</p>
        </article>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

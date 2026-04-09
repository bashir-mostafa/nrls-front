import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardPages } from "../../../constant/pageRoutes";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";
import { useMemo } from "react";

const DashboardSidebar = () => {
  const { user } = useAuth();

  const name = useMemo(() => user?.username, [user]);

  return (
    <aside className="dashboard-sidebar">
      <nav className="links">
        {dashboardPages.map((e) => (
          <NavLink key={e.to} to={e.to} end title={e.title}>
            <FontAwesomeIcon icon={e.icon} /> <span> {e.title} </span>
          </NavLink>
        ))}
        <Link to={"/"} title="back home">
          <FontAwesomeIcon icon={faHome} /> <span> back home </span>
        </Link>
      </nav>
      <div className="user">
        <div className="profile"> {name?.[0]} </div>
        <article>
          <h3>{name}</h3>
        </article>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

import "./style.css";
import { NavLink } from "react-router";
import { homeRoutes } from "../../constant/pageRoutes";
import Search from "./Search";
import { useAuth } from "../../context/AuthContext";
import { mediaTyps, publicationTyps, topicTyps } from "../../constant/enums";
import NestedMenu from "./NestedMenu";
import TopHeader from "./TopHeader";
import IconButton from "./../buttons/IconButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useCallback } from "react";

const Header = () => {
  const { user } = useAuth();

  const { isOpen, ref, toggleOpen, setIsOpen } = useClickOutside();

  const handleClick = useCallback(() => {
    if (!isOpen) return;
    setIsOpen(false);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <TopHeader />

      <div className="bottom-header container" ref={ref}>
        <IconButton icon={faBars} className="menu" onClick={toggleOpen} />

        <nav className={isOpen ? "open" : ""}>
          <NavLink to={"/"} className="link">
            home
          </NavLink>

          <NestedMenu
            name={"topics"}
            values={topicTyps}
            nestedClick={handleClick}
          />
          <NestedMenu
            name={"media"}
            values={mediaTyps}
            nestedClick={handleClick}
          />
          <NestedMenu
            name={"publication"}
            values={publicationTyps}
            nestedClick={handleClick}
          />

          <NavLink to={"/event"} className="link" onClick={handleClick}>
            event
          </NavLink>

          <NavLink to={"/survey"} className="link" onClick={handleClick}>
            survey
          </NavLink>

          <NavLink to={homeRoutes.about} className="link" onClick={handleClick}>
            about
          </NavLink>

          <NavLink
            to={homeRoutes.contact}
            className="link"
            onClick={handleClick}
          >
            contact us
          </NavLink>

          {user ? (
            <NavLink to={homeRoutes.dashboard} className="link">
              dashboard
            </NavLink>
          ) : (
            <NavLink
              to={homeRoutes.login}
              className="link"
              onClick={handleClick}
            >
              login
            </NavLink>
          )}
        </nav>

        <Search />
      </div>
    </>
  );
};

export default Header;

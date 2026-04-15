import { useCallback } from "react";
import { homeRoutes } from "../../constant/pageRoutes";
import { NavLink, useNavigate } from "react-router";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NestedMenu = ({ name, values, nestedClick }) => {
  const nav = useNavigate();

  const handleNavigate = useCallback(() => {
    nav(homeRoutes.posts.page(name), {
      state: { content_type_multi: values },
    });
  }, [nav, name, values]);

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      nestedClick();
    },
    [nestedClick],
  );

  return (
    <div className="link" onClick={handleNavigate}>
      <div>
        {name} <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <article>
        {values.map((type) => (
          <NavLink
            key={type}
            to={`/${type}`}
            onClick={handleClick}
            state={{ content_type_multi: [], content_type: type }}
          >
            {type}
          </NavLink>
        ))}
      </article>
    </div>
  );
};

export default NestedMenu;

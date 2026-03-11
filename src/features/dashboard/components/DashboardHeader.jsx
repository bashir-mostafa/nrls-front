import {
  faBarsStaggered,
  faChartLine,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../../../components/buttons/IconButton";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { languages } from "./../../../constant/languages";
import { useClickOutside } from "../../../hooks/useClickOutSide";
import useDarkMode from "./../../../hooks/useDarkMode";

const DashboardHeader = ({ isClosed, toggleClose }) => {
  const { i18n } = useTranslation();
  const { isOpen, toggleOpen, ref, setIsOpen } = useClickOutside();

  const { changeMode } = useDarkMode();

  const selectLanguage = useCallback(
    (e) => {
      i18n.changeLanguage(e);
      localStorage.setItem("language", e);
      setIsOpen(false);
    },
    [i18n, setIsOpen],
  );

  return (
    <header className={`dashboard-header ${isClosed ? "closed" : ""}`}>
      <div className="sidebar-section">
        <h2>
          <FontAwesomeIcon icon={faChartLine} /> dashboard
        </h2>
        <IconButton onClick={toggleClose}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </IconButton>
      </div>
      <div className="header">
        <label htmlFor="pages-search">
          <input type="text" placeholder="type a keyword ..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <div className="icons">
          <IconButton color="secondry-color" title="mode" onClick={changeMode}>
            <FontAwesomeIcon icon={faMoon} />
          </IconButton>

          <div className="language" ref={ref}>
            <IconButton
              color="secondry-color"
              title="language"
              onClick={toggleOpen}
            >
              <FontAwesomeIcon icon={faLanguage} />
            </IconButton>
            {isOpen && (
              <article>
                {languages.map((e) => (
                  <p
                    key={e.value}
                    onClick={() => selectLanguage(e.value)}
                    className={i18n.language === e.value ? "active" : ""}
                  >
                    {e.title}
                  </p>
                ))}
              </article>
            )}
          </div>

          <IconButton color="delete" title="logout" styleType="transparent">
            <FontAwesomeIcon icon={faSignOut} />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../../../constant/socialLinks";

const Socials = () => {
  return (
    <div className="socials">
      <div>
        <h2>contact us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          cupiditate.
        </p>
      </div>

      <div className="social">
        {Object.keys(socialLinks)?.map((e) => (
          <a href={socialLinks[e].to} target="_blank" key={e}>
            <div className="icon">
              <FontAwesomeIcon icon={socialLinks[e].icon} />
            </div>
            <div className="info">
              <p> {e} </p>
              <h3> {socialLinks[e].text} </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;

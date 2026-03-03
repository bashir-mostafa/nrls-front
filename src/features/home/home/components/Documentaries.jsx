import { Link } from "react-router";
import RepeatChildren from "../../../../components/RepeatChildren";
import {
  faArrowRight,
  faClock,
  faEye,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Img from "../../../../assets/1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Documentaries = () => {
  return (
    <>
      <main className="grid-3">
        <RepeatChildren count={3}>
          <Link className="card-style-1">
            <img src={Img} alt="" />
            <div className="card-body">
              <div className="icons">
                <span className="icon">
                  <FontAwesomeIcon icon={faEye} />
                  400
                </span>
                <span className="icon link-hover">
                  <FontAwesomeIcon icon={faUserCircle} />
                  diyar direki
                </span>
              </div>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, dolorem?
              </h3>
              <p className="two-line-ellipsis">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorum, libero itaque commodi officia culpa natus
                rerum possimus totam minus consectetur at blanditiis doloremque,
                explicabo alias veritatis dolorem fugiat aliquam.
              </p>
            </div>
            <div className="card-footer">
              <p className="time">
                <FontAwesomeIcon icon={faClock} />
                2026-12-11 / 10:10 PM
              </p>
              <span>
                read more <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </Link>
        </RepeatChildren>
      </main>

      <main className="grid-3 documentary-container">
        <RepeatChildren count={3}>
          <Link className="documentary">
            <div className="img">
              <img src={Img} alt="" />
            </div>
            <article>
              <h3 className="one-line-ellipsis">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
                facilis!
              </h3>
              <p className="one-line-ellipsis">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente quam id voluptate magni architecto distinctio, harum
                ipsam adipisci facere nisi dolores non nobis. Quo quod
                molestiae, sit hic tempore totam.
              </p>

              <div className="icons">
                <span className="icon">
                  <FontAwesomeIcon icon={faClock} />
                  2026-12-11 / 10:10 PM
                </span>
                <span className="icon">
                  <FontAwesomeIcon icon={faEye} />
                  400
                </span>
              </div>
            </article>
          </Link>
        </RepeatChildren>
      </main>
    </>
  );
};

export default Documentaries;

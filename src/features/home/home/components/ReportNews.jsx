import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RepeatChildren from "../../../../components/RepeatChildren";
import {
  faArrowRight,
  faClock,
  faEye,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useKeenSlider } from "keen-slider/react";
import Img from "../../../../assets/1.jpg";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router";

const ReportNews = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 20,
    },
  });

  return (
    <main className="reports-container keen-slider" ref={sliderRef}>
      <RepeatChildren count={10}>
        <Link className="card-style-1 keen-slider__slide">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              dolorem?
            </h3>
            <p className="two-line-ellipsis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dolorum, libero itaque commodi officia culpa natus rerum possimus
              totam minus consectetur at blanditiis doloremque, explicabo alias
              veritatis dolorem fugiat aliquam.
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
  );
};

export default ReportNews;

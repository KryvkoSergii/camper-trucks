import RaitingStar from "../../assets/rainitig_star_pressed.svg";
import css from "./CamperRaiting.module.css";
import PropTypes from "prop-types";

export default function CamperRaiting({ raiting, reviewsCount }) {
  return (
    <div className={css.camper_raiting}>
      <img src={RaitingStar} />
      <a>
        {raiting}({reviewsCount} Reviews)
      </a>
    </div>
  );
}

CamperRaiting.propTypes = {
  raiting: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
};

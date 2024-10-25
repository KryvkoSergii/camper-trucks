import css from "./CamperLocation.module.css";
import PropTypes from "prop-types";
import Map from "../../assets/map.svg";

export default function CamperLocation({ location }) {
  return (
    <div className={css.camper_location}>
      <img src={Map} />
      {location}
    </div>
  );
}

CamperLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

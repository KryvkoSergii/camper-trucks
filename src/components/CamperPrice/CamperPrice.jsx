import css from "./CamperPrice.module.css";
import PropTypes from "prop-types";

export default function CamperPrice({ price }) {
  return <a className={css.price}>€{(price ? price : 0).toFixed(2)}</a>;
}

CamperPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

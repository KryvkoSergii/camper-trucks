import css from "./FavoriteButton.module.css";
import Favorite from "../../assets/favorite_active.svg";
import FavoriteDeactive from "../../assets/favorite_deactive.svg";
import PropTypes from "prop-types";

export default function FavoriteButton({ active = false }) {
  return <img className={css.icon} src={active ? Favorite : FavoriteDeactive} />;
}

FavoriteButton.propTypes = {
  active: PropTypes.bool,
};

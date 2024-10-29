import css from "./FavoriteButton.module.css";
import Favorite from "../../assets/favorite_active.svg";
import FavoriteDeactive from "../../assets/favorite_deactive.svg";
import PropTypes from "prop-types";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCheckedItems } from "../../redux/selectors";

import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice";

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch();
  const componentId = useId();
  const checkedItems = useSelector(selectCheckedItems);

  const onChange = (event) => {
    if (event.target.checked) {
      dispatch(addToFavorites(id));
    } else {
      dispatch(removeFromFavorites(id));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id={componentId}
        className={css.button_box}
        onChange={onChange}
        checked={checkedItems.includes(id)}
      />
      <label htmlFor={componentId}>
        <img className={css.icon} src={checkedItems.includes(id) ? Favorite : FavoriteDeactive} />
      </label>
    </div>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string,
};

import { useId } from "react";
import css from "./FilterCheckboxButton.module.css";
import PropTypes from "prop-types";

export default function FilterChekboxButton({ icon, text, onChange }) {
  const componentId = useId();
  return (
    <div className={css.filter_button}>
      <input
        type="checkbox"
        className={css.filter_button_box}
        id={componentId}
        onChange={onChange}
      />
      <label htmlFor={componentId}>
        <img src={icon} />
        <span>{text}</span>
      </label>
    </div>
  );
}

FilterChekboxButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

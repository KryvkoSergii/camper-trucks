import PropTypes from "prop-types";
import css from "./ActionButton.module.css";

export default function ActionButton({ label, onClick, width = "166px" }) {
  return (
    <button
      className={css.action_button}
      style={{ width: width }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
};

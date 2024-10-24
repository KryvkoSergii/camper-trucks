import { useId } from "react";
import css from "./FilterRadioButton.module.css";
import PropTypes from "prop-types";

export default function FilterRadioButton({ icon, text, onChange = ((event) => {console.log(event)}) }) {
  const componentId = useId();
  return (
    <div className={css.filter_button}>
      <input type="checkbox" className={css.filter_button_box} id={componentId} onChange={onChange}/>
      <label htmlFor={componentId}>
        <img src={icon}/>
        <span>{text}</span>
      </label>
    </div>
  );
}

FilterRadioButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

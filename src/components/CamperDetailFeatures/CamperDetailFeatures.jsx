import CamperFeatures from "../CamperFeatures/CamperFeatures";
import PropTypes from "prop-types";
import css from "./CamperDetailFeatures.module.css";

export default function CamperDetailFeatures({ item }) {
  return (
    <div className={css.details_features}>
      <CamperFeatures item={item} />
      <p>Vehicle details</p>
      <hr />
      {getColumn(item, "Form", (item) => {
        const value = item["form"];
        switch (value) {
          case "alcove":
            return "Alcove";
          case "fullyIntegrated":
            return "Fully Integrated";
          case "panelTruck":
            return "Panel truck";
          default:
            return value;
        }
      })}
      {getCombinedColumn(item, "Length", "length")}
      {getCombinedColumn(item, "Width", "width")}
      {getCombinedColumn(item, "Height", "height")}
      {getCombinedColumn(item, "Tank", "tank")}
      {getColumn(
        item,
        "Consumption",
        (item) => {
          const value = item["consumption"];
          return value;
        },
        css.consumption
      )}
    </div>
  );
}

function getCombinedColumn(item, label, fieldName) {
  return getColumn(item, label, (item) => {
    const value = item[fieldName];
    return insertSpaceBeforeCharacter(value);
  });
}

function getColumn(item, name, valueExtractor, className = css.feature) {
  const value = valueExtractor(item);
  return (
    <div className={className}>
      <a>{name}</a>
      <a>{value}</a>
    </div>
  );
}

function insertSpaceBeforeCharacter(value) {
  return value
    .split(/([a-zA-Z])/)
    .filter((v) => v)
    .join(" ");
}

let Item = PropTypes.shape({
  id: PropTypes.string.isRequired,
  transmission: PropTypes.string,
  AC: PropTypes.bool,
  bathroom: PropTypes.bool,
  kitchen: PropTypes.bool,
  TV: PropTypes.bool,
  radio: PropTypes.bool,
  refrigerator: PropTypes.bool,
  microwave: PropTypes.bool,
  gas: PropTypes.bool,
  water: PropTypes.bool,
  engine: PropTypes.string,
  form: PropTypes.string,
  length: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  tank: PropTypes.string,
  consumption: PropTypes.string,
});

CamperDetailFeatures.propTypes = {
  item: Item,
};

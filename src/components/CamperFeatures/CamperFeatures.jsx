import PropTypes from "prop-types";
import css from "./CamperFeatures.module.css";

class Mapping {
  constructor(
    label,
    icon,
    fieldName,
    isApply = (item) => item[fieldName] === true
  ) {
    this.label = label;
    this.icon = icon;
    this.isApply = isApply;
  }
}

const mapping = {
  transmission: new Mapping(
    "Automatic",
    "/src/assets/automatic.svg",
    undefined,
    (item) => item["transmission"] === "automatic"
  ),
  AC: new Mapping("AC", "/src/assets/ac.svg", "AC"),
  bathroom: new Mapping("Bathroom", "/src/assets/bathroom.svg", "bathroom"),
  kitchen: new Mapping("Kitchen", "/src/assets/kitchen.svg", "kitchen"),
  TV: new Mapping("TV", "/src/assets/tv.svg", "TV"),
  radio: new Mapping("Radio", "/src/assets/radio.svg", "radio"),
  refrigerator: new Mapping(
    "Refrigerator",
    "/src/assets/refrigerator.svg",
    "refrigerator"
  ),
  microwave: new Mapping("Microwave", "/src/assets/microwave.svg", "microwave"),
  gas: new Mapping("Gas", "/src/assets/gas.svg", "gas"),
  water: new Mapping("Water", "/src/assets/water.svg", "water"),
  engine: new Mapping(
    "Petrol",
    "/src/assets/petrol.svg",
    undefined,
    (item) => item["engine"] === "petrol"
  ),
};

export default function CamperFeatures({ item }) {
  return (
    <ul className={css.camper_features}>
      {Object.keys(item)
        .filter((i) => i in mapping && mapping[i].isApply(item))
        .map((i) => singleFeature(item.id, mapping[i]))}
    </ul>
  );
}

function singleFeature(itemId, { label, icon }) {
  return (
    <li key={`${itemId}-${label}-feature`}>
      <div className={css.inner}>
        <img src={icon} />
        <a>{label}</a>
      </div>
    </li>
  );
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
  engine: PropTypes.string
});

CamperFeatures.propTypes = {
  item: Item,
};

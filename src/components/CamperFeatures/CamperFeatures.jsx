import PropTypes from "prop-types";
import css from "./CamperFeatures.module.css";
import AutomaticIcon from "../../assets/automatic.svg";
import ACIcon from "../../assets/ac.svg";
import BathroomIcon from "../../assets/bathroom.svg";
import KitchenIcon from "../../assets/kitchen.svg";
import TVIcon from "../../assets/tv.svg";
import RadioIcon from "../../assets/radio.svg";
import RefrigeratorIcon from "../../assets/refrigerator.svg";
import MicrowaveIcon from "../../assets/microwave.svg";
import GasIcon from "../../assets/gas.svg";
import WaterIcon from "../../assets/water.svg";
import PetrolIcon from "../../assets/petrol.svg";

class Mapping {
  constructor(
    labelExtractor = (item) => undefined,
    icon,
    fieldName,
    isApply = (item) => item[fieldName] === true
  ) {
    this.labelExtractor = labelExtractor;
    this.icon = icon;
    this.isApply = isApply;
  }
}

const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const mapping = {
  transmission: new Mapping(
    () => "Automatic",
    AutomaticIcon,
    undefined,
    (item) => item["transmission"] === "automatic"
  ),
  AC: new Mapping(() => "AC", ACIcon, "AC"),
  bathroom: new Mapping(() => "Bathroom", BathroomIcon, "bathroom"),
  kitchen: new Mapping(() => "Kitchen", KitchenIcon, "kitchen"),
  TV: new Mapping(() => "TV", TVIcon, "TV"),
  radio: new Mapping(() => "Radio", RadioIcon, "radio"),
  refrigerator: new Mapping(
    () => "Refrigerator",
    RefrigeratorIcon,
    "refrigerator"
  ),
  microwave: new Mapping(() => "Microwave", MicrowaveIcon, "microwave"),
  gas: new Mapping(() => "Gas", GasIcon, "gas"),
  water: new Mapping(() => "Water", WaterIcon, "water"),
  engine: new Mapping(
    (item) => capitalizeString(item["engine"]),
    PetrolIcon,
    "engine",
    (item) => item["engine"] !== undefined
  ),
};

export default function CamperFeatures({ item }) {
  return (
    <ul className={css.camper_features}>
      {Object.keys(item)
        .filter((i) => i in mapping && mapping[i].isApply(item))
        .map((i) => singleFeature(item, mapping[i]))}
    </ul>
  );
}

function singleFeature(item, { labelExtractor, icon }) {
  const label = labelExtractor(item);
  return (
    <li key={`${item.id}-${label}-feature`}>
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
  engine: PropTypes.string,
});

CamperFeatures.propTypes = {
  item: Item,
};

import FilterRadioButton from "../FilterRadioButton/FilterRadioButton";
import LocationBar from "../LocationBar/LocationBar";
import AC from "../../assets/ac.svg";
import Automatic from "../../assets/automatic.svg";
import Kitchen from "../../assets/kitchen.svg";
import TV from "../../assets/tv.svg";
import Bathroom from "../../assets/bathroom.svg";
import Van from "../../assets/van.svg";
import Integrated from "../../assets/integrated.svg";
import Alcove from "../../assets/alcove.svg";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import ActionButton from "../ActionButton/ActionButton";

export default function FilterList() {
  const dispatch = useDispatch();

  const onChange = (stateFieldName) => {
    return (event) => {
      dispatch(
        changeFilter({
          field: stateFieldName,
          value: event.target.checked,
        })
      );
    };
  };

  return (
    <div>
      <LocationBar
        onChangeFunction={(newValue) => {
          dispatch(
            changeFilter({
              field: 'location',
              value: newValue,
            })
          );
        }}
      />
      Vehicle equipment
      <FilterRadioButton icon={AC} text="AC" onChange={onChange("ac")} />
      <FilterRadioButton
        icon={Automatic}
        text="Automatic"
        onChange={onChange("automatic")}
      />
      <FilterRadioButton
        icon={Kitchen}
        text="Kitchen"
        onChange={onChange("kitchen")}
      />
      <FilterRadioButton icon={TV} text="TV" onChange={onChange("tv")} />
      <FilterRadioButton
        icon={Bathroom}
        text="Bathroom"
        onChange={onChange("bathroom")}
      />
      Vehicle type
      <FilterRadioButton icon={Van} text="Van" onChange={onChange("van")} />
      <FilterRadioButton
        icon={Integrated}
        text="Fully Integrated"
        onChange={onChange("integrated")}
      />
      <FilterRadioButton
        icon={Alcove}
        text="Alcove"
        onChange={onChange("alcove")}
      />
      <ActionButton label="Search" onClick={(event) => console.log("click")}/>
    </div>
  );
}

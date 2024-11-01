import FilterRadioButton from "../FilterRadioButton/FilterRadioButton";
import FilterCheckboxButton from "../FilterCheckboxButton/FilterCheckboxButton";
import LocationBar from "../LocationBar/LocationBar";
import AC from "../../assets/ac.svg";
import Automatic from "../../assets/automatic.svg";
import Kitchen from "../../assets/kitchen.svg";
import TV from "../../assets/tv.svg";
import Bathroom from "../../assets/bathroom.svg";
import Van from "../../assets/van.svg";
import Integrated from "../../assets/integrated.svg";
import Alcove from "../../assets/alcove.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import ActionButton from "../ActionButton/ActionButton";
import { selectFilters } from "../../redux/selectors";
import { fetchByQueryCampers } from "../../redux/operations";
import css from "./FilterList.module.css";
import buildFilter from "../filterBuilder";

export default function FilterList() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const page = 0;

  const onSearch = (event) => {
    const cleanedFilter = buildFilter(filters, page);
    dispatch(fetchByQueryCampers(cleanedFilter));
  };

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

  const onFormChange = (stateFieldName) => {
    return (event) => {
      dispatch(
        changeFilter({
          field: "form",
          value: stateFieldName,
        })
      );
    };
  };

  const onTransmissionChange = () => {
    return (event) => {
      dispatch(
        changeFilter({
          field: "transmission",
          value: "automatic",
        })
      );
    };
  };

  return (
    <>
      <LocationBar
        onChangeFunction={(newValue) => {
          dispatch(
            changeFilter({
              field: "location",
              value: newValue,
            })
          );
        }}
      />
      <div className={css.filters_plate}>
        <a className={css.filter_label}>Filters</a>
        <div>
          <p>Vehicle equipment</p>
          <div className={css.line}></div>
          <div className={css.filter_block}>
            <FilterCheckboxButton
              icon={AC}
              text="AC"
              onChange={onChange("AC")}
            />
            <FilterCheckboxButton
              icon={Automatic}
              text="Automatic"
              onChange={onTransmissionChange()}
            />
            <FilterCheckboxButton
              icon={Kitchen}
              text="Kitchen"
              onChange={onChange("kitchen")}
            />
            <FilterCheckboxButton
              icon={TV}
              text="TV"
              onChange={onChange("TV")}
            />
            <FilterCheckboxButton
              icon={Bathroom}
              text="Bathroom"
              onChange={onChange("bathroom")}
            />
          </div>
        </div>
        <div>
          <p>Vehicle type</p>
          <div className={css.line}></div>
          <fieldset className={css.filter_block}>
            <FilterRadioButton
              icon={Van}
              text="Van"
              onChange={onFormChange("panelTruck")}
              groupName="camper-form"
            />
            <FilterRadioButton
              icon={Integrated}
              text="Fully Integrated"
              onChange={onFormChange("fullyIntegrated")}
              groupName="camper-form"
            />
            <FilterRadioButton
              icon={Alcove}
              text="Alcove"
              onChange={onFormChange("alcove")}
              groupName="camper-form"
            />
          </fieldset>
        </div>
      </div>
      <ActionButton label="Search" onClick={onSearch} />
    </>
  );
}

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserLocation } from "../../redux/operations";
import Map from "../../assets/map.svg";
import css from "./LocationBar.module.css";
import { useSelector } from "react-redux";
import { selectUserLocation } from "../../redux/selectors";
import PropTypes from "prop-types";

export default function LocationBar({onChangeFunction}) {
  const dispatch = useDispatch();
  const location = useSelector(selectUserLocation);
  const [shownLocation, setShownLocation] = useState("");

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchUserLocation(pos.coords));
    }

    function error(val) {
      console.log(val);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  useEffect(() => {
    const value = location.city ? `${location.city}, ${location.country}` : "";
    setShownLocation(value);
  }, [location]);

  useEffect(() => {onChangeFunction(shownLocation)}, [shownLocation]);

  const onChange = (event) => {
    setShownLocation(event.target.value);
  }

  return (
    <div className={css.location_bar}>
      <a>Location</a>
      <div>
        <input placeholder="City" type="text" value={shownLocation} onChange={onChange}/>
        <img src={Map}/>
      </div>
    </div>
  );
}

LocationBar.propTypes = {
  onChangeFunction: PropTypes.func
};
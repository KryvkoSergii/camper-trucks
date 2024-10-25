import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import CamperItem from "../CamperItem/CamperItem";

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  useEffect(() => {
    dispatch(fetchCampers(""));
  }, []);
  
  return (
    <ul>
      {campers.items.map((item) => (
        <li key={item.id}>
          <CamperItem item={item} />
        </li>
      ))}
    </ul>
  );
}

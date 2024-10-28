import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchByQueryCampers } from "../../redux/operations";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import CamperItem from "../CamperItem/CamperItem";
import { resetFilter } from "../../redux/filterSlice";
import css from "./CamperList.module.css";

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  useEffect(() => {
    dispatch(resetFilter());
    dispatch(fetchByQueryCampers({}));
  }, []);

  return (
    <ul className={css.camper_list}>
      {campers.items.map((item) => (
        <li key={item.id}>
          <CamperItem item={item} />
        </li>
      ))}
    </ul>
  );
}

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchByQueryCampers } from "../../redux/operations";
import { useSelector } from "react-redux";
import { selectCampers, selectFilters, selectPage } from "../../redux/selectors";
import CamperItem from "../CamperItem/CamperItem";
import { resetFilter } from "../../redux/filterSlice";
import css from "./CamperList.module.css";
import buildFilter from "../filterBuilder";

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const fetch = (filtersVal, pageVal) => {
    const cleanedFilter = buildFilter(filtersVal, pageVal);
    dispatch(fetchByQueryCampers(cleanedFilter));
  }

  useEffect(() => {
    dispatch(resetFilter());
    fetch({}, 0);
  }, []);

  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const onLoadMore = (event) => {
    fetch(filters, page);
  }

  return (
    <>
      <ul className={css.camper_list}>
        {campers.items.map((item) => (
          <li key={item.id}>
            <CamperItem item={item} />
          </li>
        ))}
      </ul>
      {(campers.items.length < campers.total) && (
        <div className={css.button_container}>
          <button type="button" className={css.load_more} onClick={onLoadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}

import FilterList from "../../components/FilterList/FilterList";
import CamperList from "../../components/CamperList/CamperList";
import css from "./CatalogPage.module.css";

export default function CamperCatalogPage() {
  return (
    <div className={css.catalog}>
      <FilterList />
      <CamperList />
    </div>
  );
}

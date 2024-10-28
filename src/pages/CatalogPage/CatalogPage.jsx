import FilterList from "../../components/FilterList/FilterList";
import CamperList from "../../components/CamperList/CamperList";

export default function CamperCatalogPage() {
  return (
    <div>
      <div>
        <FilterList />
      </div>
      <div>
        <CamperList />
      </div>
    </div>
  );
}

export default function buildFilter(filters, page){
    const cleanedFilter = {};
    for (const [key, value] of Object.entries(filters)) {
      if (key !== "location" && key !== "form" && value !== false) {
        cleanedFilter[key] = value;
      }

      if (key === "location" && value) {
        cleanedFilter[key] = value;
      }

      if (key === "form" && value) {
        cleanedFilter[key] = value;
      }
    }
    cleanedFilter["page"] = (page ? page : 0) + 1;
    cleanedFilter["limit"] = 10;
    return cleanedFilter;
}
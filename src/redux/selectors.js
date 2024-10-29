export const selectUserLocation = (state) => state.user.location;
export const selectFilters = (state) => state.filters;
export const selectCampers = (state) => state.campers;
export const selectLoader = (state) => state.campers.loading;
export const selectPage = (state) => state.campers.page;
export const selectCheckedItems = (state) => state.favorites.items;
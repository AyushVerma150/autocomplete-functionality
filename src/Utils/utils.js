export const searchFromData = (searchData, searchText) => {
  return searchData.filter(
    (item) =>
      item.name.toLowerCase().substring(0, searchText.length) ===
      searchText.toLowerCase()
  );
};

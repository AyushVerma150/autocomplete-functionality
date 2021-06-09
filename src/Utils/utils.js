export const sortDataByName = (dataArray, sortOrder) => {
  if (sortOrder === "asc") {
    return dataArray.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  } else {
    return dataArray.sort((a, b) =>
      a.name < b.name ? 1 : b.name < a.name ? -1 : 0
    );
  }
};

export const searchFromData = (searchData, searchText, sort) => {
  //search on the basis of sort

  if (sort === "asc") {
    searchData.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    return searchData.filter(
      (item) =>
        item.name.toLowerCase().substring(0, searchText.length) ===
        searchText.toLowerCase()
    );
  } else if (sort === "dsc") {
    searchData.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
    return searchData.filter(
      (item) =>
        item.name.toLowerCase().substring(0, searchText.length) ===
        searchText.toLowerCase()
    );
  } else {
    return searchData.filter(
      (item) =>
        item.name.toLowerCase().substring(0, searchText.length) ===
        searchText.toLowerCase()
    );
  }
};

export const bindData = (JsonData, searchText, sortOrder, searchLimit) => {
  let resultArray = [];
  JsonData.data.map((user) => {
    if (
      searchText.length >= 1 &&
      user.name.toLowerCase().substring(0, searchText.length) ===
        searchText.toLowerCase()
    )
      resultArray.push(user);
    return "";
  });
  return sortDataByName(resultArray, sortOrder);
};

export const groupByFilter = (data, groupFilter) => {
  const result = data.reduce(function (r, a) {
    r[a[groupFilter]] = r[a[groupFilter]] || [];
    r[a[groupFilter]].push(a);
    return r;
  }, Object.create(null));

  return result;
};

const findFromResult = (professionName, result) => {
  for (let key in result) {
    if (result.hasOwnProperty(key)) {
      if (key === professionName) {
        return result[key];
      }
    }
  }
};

export const fetchFilteredRecords = (groupedPersons, searchText) => {
  let result = {};
  for (let key in groupedPersons) {
    if (groupedPersons.hasOwnProperty(key)) {
      let currentGroup = groupedPersons[key];

      for (let i = 0; i < currentGroup.length; i++) {
        let person = currentGroup[i];
        if (
          person.profession.toLowerCase().substring(0, searchText.length) ===
          searchText.toLowerCase()
        ) {
          const partialResult = findFromResult(key, result);
          if (partialResult) {
            result = {
              ...result,
              [key]: [...partialResult, person],
            };
          } else {
            result = {
              ...result,
              [key]: [person],
            };
          }
        }
      }
    }
  }

  if (searchText.length >= 1) return result;
  else return {};
};

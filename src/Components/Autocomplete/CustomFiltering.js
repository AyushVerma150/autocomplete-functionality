import React, { useState } from "react";

import Icon from "../UI/Icon";
import InputField from "../UI/InputField";
import CreateList from "../UI/CreateList";
import { searchFromData, sliceData } from "../../Utils/utils";

import CONSTANTS from "../../Constants/Constants";

import styles from "./Autocomplete.module.css";

const CustomFiltering = ({
  searchLimit,
  sortOrder,
  autoSuggest,
  dataSource,
}) => {
  let searchedUserList = null;

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hintData, setHintData] = useState([]);

  //allowing searching of data on change of textbox value
  const onSearch = (value) => {
    if (value === "") {
      setSearchResult([]);
    } else {
      const results = searchFromData(dataSource, value, sortOrder);

      if (results) {
        let hintArray = [];
        results.map((a) => hintArray.push(a.name));
        setHintData(hintArray);
      }
      setSearchResult(sliceData(results, 0, searchLimit));
    }
  };

  const changeHandler = (event) => {
    event.stopPropagation();
    const value = event.target.value;
    onSearch(value);
    setSearchText(value);
  };

  const resetValues = () => {
    setSearchText("");
    setSearchResult([]);
  };

  //set the selected value
  const changeResultHandler = ({ name }) => {
    setSearchText(name);
    setSearchResult([]);
  };

  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  //Displaying The Results Fetched
  searchedUserList = (
    <CreateList
      data={searchResult}
      onItemClick={changeResultHandler}
      clicked={preventPropagation}
      searchText={searchText}
    />
  );

  //if there are actual fetched results
  if (searchResult.length >= 1) {
    searchedUserList = <div className={styles.auto}>{searchedUserList}</div>;
  }

  return (
    <div className={styles.DivStyle} onClick={resetValues}>
      <div className={styles.overViewDiv}>
        <h2>{CONSTANTS.UI.OVER_VIEW}</h2>
        <p>{CONSTANTS.UI.OVER_VIEW_CONTENT}</p>
      </div>
      <hr />
      <div className={styles.InnerDiv}>
        <InputField
          value={searchText}
          onChange={changeHandler}
          onClick={preventPropagation}
          className={styles.SearchBox}
          type={CONSTANTS.UI.TEXT_FIELD_TYPE}
          hintData={autoSuggest ? hintData : []}
          preventPropagation={preventPropagation}
          placeholder={CONSTANTS.UI.TEXT_FIELD_PLACEHOLDER}
        />
        <Icon iconName={CONSTANTS.UI.CROSS_ICON} clicked={resetValues} />
      </div>
      {searchedUserList}
    </div>
  );
};

export default CustomFiltering;

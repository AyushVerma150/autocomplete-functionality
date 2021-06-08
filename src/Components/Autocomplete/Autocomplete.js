import React, { useState } from "react";

import Icon from "../UI/Icon";
import Image from "../UI/Image";
import InputField from "../UI/InputField";
import { searchFromData } from "../../Utils/utils";
import HighlighterComponent from "../UI/Highlighter";

import CONSTANTS from "../../Constants/Constants";

import styles from "./Autocomplete.module.css";

const Autocomplete = () => {
  //local variables
  let searchedUserList = null;
  const data = CONSTANTS.DATA.USER_DATA;

  const [searchText, setSearchText] = useState(""); // search Text from Input Field
  const [searchResult, setSearchResult] = useState([]); //Search Results Array

  const onSearch = (value) => {
    if (value === "") {
      setSearchResult([]);
    } else {
      const results = searchFromData(data, value);
      setSearchResult(results);
    }
  };

  //On Input of Search Text
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

  const changeResultHandler = ({ name }) => {
    setSearchText(name);
    setSearchResult([]);
  };

  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  //Displaying The Results Fetched
  searchedUserList = searchResult.map((res) => {
    return (
      <div
        onClick={(event) => {
          preventPropagation(event);
          changeResultHandler(res);
        }}
        className={styles.Display}
      >
        <HighlighterComponent
          searchResult={searchText}
          textToHighlight={res.name}
        />
        <Image src={res.image} />
      </div>
    );
  });

  return (
    <div
      className={styles.DivStyle}
      onClick={() => {
        resetValues();
      }}
    >
      <div className={styles.InnerDiv}>
        <InputField
          value={searchText}
          onChange={changeHandler}
          onClick={preventPropagation}
          className={styles.SearchBox}
          type={CONSTANTS.UI.TEXT_FIELD_TYPE}
          placeholder={CONSTANTS.UI.TEXT_FIELD_PLACEHOLDER}
        />
        <Icon iconName={CONSTANTS.UI.CROSS_ICON} clicked={resetValues} />
      </div>
      {searchedUserList.length >= 1 ? (
        <div className={styles.auto}>{searchedUserList}</div>
      ) : null}
    </div>
  );
};

export default Autocomplete;

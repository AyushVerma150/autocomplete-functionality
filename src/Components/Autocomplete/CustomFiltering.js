import React, { useState } from "react";
import { Hint } from "react-autocomplete-hint";

import Icon from "../UI/Icon";
import Image from "../UI/Image";
import InputField from "../UI/InputField";
import { searchFromData } from "../../Utils/utils";
import HighlighterComponent from "../UI/Highlighter";

import CONSTANTS from "../../Constants/Constants";

import styles from "./Autocomplete.module.css";

const CustomFiltering = ({ searchLimit, sort, autoSuggest, dataSource }) => {
  let searchedUserList = null;

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hintData, setHintData] = useState([]);

  const onSearch = (value) => {
    if (value === "") {
      setSearchResult([]);
    } else {
      const results = searchFromData(dataSource, value, sort);

      if (results) {
        let hintArray = [];
        results.map((a) => hintArray.push(a.name));
        setHintData(hintArray);
      }
      setSearchResult(results.slice(0, searchLimit));
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
        <Image src={res.image} style={styles.imageStyle} />
      </div>
    );
  });

  return (
    <div className={styles.DivStyle} onClick={resetValues}>
      <div className={styles.overViewDiv}>
        <h2>{CONSTANTS.UI.OVER_VIEW}</h2>
        <p>{CONSTANTS.UI.OVER_VIEW_CONTENT}</p>
      </div>
      <hr />
      <div className={styles.InnerDiv}>
        {autoSuggest ? (
          <Hint options={hintData} allowTabFill>
            <input
              value={searchText}
              onChange={changeHandler}
              onClick={preventPropagation}
              className={styles.SearchBox}
              type={CONSTANTS.UI.TEXT_FIELD_TYPE}
              placeholder={CONSTANTS.UI.TEXT_FIELD_PLACEHOLDER}
            />
          </Hint>
        ) : (
          <InputField
            value={searchText}
            onChange={changeHandler}
            onClick={preventPropagation}
            className={styles.SearchBox}
            type={CONSTANTS.UI.TEXT_FIELD_TYPE}
            placeholder={CONSTANTS.UI.TEXT_FIELD_PLACEHOLDER}
          />
        )}
        <Icon iconName={CONSTANTS.UI.CROSS_ICON} clicked={resetValues} />
      </div>
      {searchedUserList.length >= 1 ? (
        <div className={styles.auto}>{searchedUserList}</div>
      ) : null}
    </div>
  );
};

export default CustomFiltering;

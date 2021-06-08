import React, { useState } from "react";

import Icon from "../UI/Icon";
import Image from "../UI/Image";
import InputField from "../UI/InputField";
import { searchFromData } from "../../Utils/utils";
import HighlighterComponent from "../UI/Highlighter";
import imageUrl from "../../databinding.png";
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
        <Image src={res.image} style={styles.imageStyle} />
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
      <div style={{ display: "block", textAlign: "left" }}>
        <h2>Overview</h2>
        <p>
          The React AutoComplete is a textbox component that provides a list of
          suggestions to select from as the user types. It has several
          out-of-the-box features such as data binding, filtering, grouping, UI
          customization, accessibility, and more.
        </p>
      </div>
      <hr />
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

      <hr style={{ margin: "0 auto", width: "80%", marginTop: "30px" }} />
      <div
        style={{
          height: "80vh",
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ left: "0", width: "50%" }}>
          <Image src={imageUrl} style={styles.dataBindingImage} />
        </div>
        <div
          style={{
            right: "0",
            width: "40%",
            textAlign: "left",
            margin: "0 auto",
            marginTop: "50px",
          }}
        >
          <h2>Data Binding</h2>
          <p>
            You can bind data from a variety of data sources, such as an array
            of primitive data, JSON data collections, or remote data sources
            using different kinds of adaptors such as OData, OData V4, URL,
            JSON, and Web API. Data binding uses our data manager to manage data
            and also has customization options for data requests and processing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;

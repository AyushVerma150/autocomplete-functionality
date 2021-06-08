import React, { useState } from "react";

import Icon from "../UI/Icon";
import Image from "../UI/Image";
import InputField from "../UI/InputField";
import { searchFromData } from "../../Utils/utils";
import HighlighterComponent from "../UI/Highlighter";

import styles from "./Autocomplete.module.css";

const Autocomplete = () => {
  //local variables
  let content = null;
  const data = [
    { name: "Andrew R. Kelly", image: "https://www.placecage.com/640/360" },
    { name: "Adrian Sanchez", image: "https://www.placecage.com/640/360" },
    { name: "Anderson Brown", image: "https://www.placecage.com/640/360" },
    { name: "Anna Valio", image: "https://www.placecage.com/640/360" },
    { name: "Asha Mathews", image: "https://www.placecage.com/640/360" },
    { name: "Alicia keys", image: "https://www.placecage.com/640/360" },
    { name: "Alexa Dot", image: "https://www.placecage.com/640/360" },
    { name: "Bob Squarepants", image: "https://www.placecage.com/640/360" },
    { name: "Anonymous", image: "https://www.placecage.com/640/360" },
    { name: "Rahat Verma", image: "https://www.placecage.com/640/360" },
    { name: "Aman Bansal", image: "https://www.placecage.com/640/360" },
    { name: "Piyush Goyal", image: "https://www.placecage.com/640/360" },
    { name: "Ayush Verma", image: "https://www.placecage.com/640/360" },
  ];

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

  //Displaying The Results Fetched
  content = searchResult.map((res) => {
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
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
          type="text"
          autoFocus={true}
          value={searchText}
          placeholder="Search"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={changeHandler}
          className={styles.SearchBox}
        />
        <Icon iconName="fas fa-times fa-lg" clicked={resetValues} />
      </div>
      {content.length >= 1 ? (
        <div className={styles.auto}>{content}</div>
      ) : null}
    </div>
  );
};

export default Autocomplete;

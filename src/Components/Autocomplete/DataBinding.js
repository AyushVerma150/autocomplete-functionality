import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";

import Icon from "../UI/Icon";
import Image from "../UI/Image";
import InputField from "../UI/InputField";
import { bindData } from "../../Utils/utils";
import HighlighterComponent from "../UI/Highlighter";

import imageUrl from "../../databinding.png";
import CONSTANTS from "../../Constants/Constants";

import styles from "./Autocomplete.module.css";

const DataBinding = ({ dataSource, sortOrder, searchLimit }) => {
  let searchedUserList = null;

  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState([]);

  const getData = async (searchText) => {
    const jsonData = await axiosInstance.get(dataSource);
    let dataArray = bindData(jsonData, searchText, sortOrder, searchLimit);
    setUserData(dataArray.slice(0, searchLimit));
  };

  useEffect(() => {
    getData(searchText);
  }, [searchText]);

  const changeHandler = (event) => {
    event.stopPropagation();
    setSearchText(event.target.value);
  };

  const preventPropagation = (event) => {
    event.stopPropagation();
  };

  if (userData.length >= 1) {
    searchedUserList = userData.map((res) => {
      return (
        <div
          onClick={(event) => {
            preventPropagation(event);
          }}
          className={styles.Display}
        >
          <HighlighterComponent
            searchResult={searchText}
            textToHighlight={res.name}
          />
        </div>
      );
    });
  }

  const resetValues = () => {
    setSearchText("");
    setUserData([]);
  };

  return (
    <div onClick={resetValues}>
      <div className={styles.dataBindingDiv}>
        <div className={styles.dataBindingLeft}>
          <Image src={imageUrl} style={styles.dataBindingImage} />
        </div>
        <div className={styles.dataBindingRight}>
          <h2>{CONSTANTS.UI.DATA_BINDING}</h2>
          <p>{CONSTANTS.UI.DATA_BINDING_CONTENT}</p>
        </div>
      </div>
      <div className={styles.dataBindingInnerDiv}>
        <InputField
          value={searchText}
          onChange={changeHandler}
          onClick={preventPropagation}
          className={styles.bindingSearchBox}
          type={CONSTANTS.UI.TEXT_FIELD_TYPE}
          placeHolder={CONSTANTS.UI.DATA_BINDING_PLACEHOLDER}
        />
        <Icon iconName={CONSTANTS.UI.CROSS_ICON} clicked={resetValues} />
      </div>

      {userData.length >= 1 ? (
        <div className={styles.auto}>{searchedUserList}</div>
      ) : null}
    </div>
  );
};

export default DataBinding;

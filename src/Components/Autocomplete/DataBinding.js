import React, { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../axios";

import Icon from "../UI/Icon";
import Image from "../UI/Image";
import CreateList from "../UI/CreateList";
import InputField from "../UI/InputField";
import { bindData, sliceData } from "../../Utils/utils";

import imageUrl from "../../databinding.png";
import CONSTANTS from "../../Constants/Constants";

import styles from "./Autocomplete.module.css";

const DataBinding = ({ dataSource, sortOrder, searchLimit }) => {
  let searchedUserList = null;

  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState([]);

  const getData = useCallback(
    async (searchText) => {
      const jsonData = await axiosInstance.get(dataSource);
      let dataArray = bindData(jsonData, searchText, sortOrder, searchLimit);
      setUserData(sliceData(dataArray, 0, searchLimit));
    },
    [dataSource, searchLimit, sortOrder]
  );

  useEffect(() => {
    getData(searchText);
  }, [searchText, getData]);

  const changeHandler = (event) => {
    event.stopPropagation();
    setSearchText(event.target.value);
  };

  const preventPropagation = (event) => {
    event.stopPropagation();
  };

  const resetValues = () => {
    setSearchText("");
    setUserData([]);
  };

  //create user list
  if (userData.length >= 1) {
    searchedUserList = (
      <CreateList
        data={userData}
        searchText={searchText}
        clicked={preventPropagation}
      />
    );
  }

  if (userData.length >= 1) {
    searchedUserList = <div className={styles.auto}>{searchedUserList}</div>;
  }

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
      {searchedUserList}
    </div>
  );
};

export default DataBinding;

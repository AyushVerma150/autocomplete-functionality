import React, { useState } from "react";

import Image from "../UI/Image";
import Icon from "../UI/Icon";
import InputField from "../UI/InputField";
import {
  fetchFilteredRecords,
  sortDataByName,
  sliceData,
} from "../../Utils/utils";

import imageUrl from "../../grouping.png";
import CONSTANTS from "../../Constants/Constants";

import styles from "./Autocomplete.module.css";

const GroupFiltering = ({ dataSource, sortOrder, searchLimit }) => {
  let userDataList = null;

  const [searchText, setSearchText] = useState("");
  const [dataFetched, setDataFetched] = useState({});

  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  const onSearch = (value) => {
    const records = fetchFilteredRecords(dataSource, value);
    setDataFetched(records);
  };

  const changeHandler = (event) => {
    event.stopPropagation();
    const value = event.target.value;
    onSearch(value);
    setSearchText(value);
  };

  const resetValues = () => {
    setSearchText("");
    setDataFetched([]);
  };

  if (Object.keys(dataFetched).length !== 0) {
    for (let key in dataFetched) {
      if (dataFetched.hasOwnProperty(key)) {
        let currentGroup = dataFetched[key];
        currentGroup = sortDataByName(currentGroup, sortOrder);
        currentGroup = sliceData(currentGroup, 0, searchLimit);
        userDataList = (
          <div className={styles.outerHeader}>
            <h3 className={styles.categoryHeading}>{key}</h3>
            <div className={styles.innerHeader}>
              <p className={styles.paraStyles}>Name</p>
              <p className={styles.paraStyles}>Age</p>
            </div>
            {currentGroup.map((person, i) => (
              <div className={styles.personDiv}>
                <p key={i}>{person.name}</p>
                <p>{person.age}</p>
              </div>
            ))}
          </div>
        );
      }
    }
  }

  return (
    <div className={styles.groupFilteringDiv} onClick={resetValues}>
      <div className={styles.leftHalf}>
        <h2>{CONSTANTS.UI.GROUP_HEADING}</h2>
        <p>{CONSTANTS.UI.GROUP_CONTENT}</p>
        <Image src={imageUrl} style={styles.groupImg} />
      </div>
      <div className={styles.groupFilterRight}>
        <div className={styles.containerDiv}>
          <InputField
            value={searchText}
            onChange={changeHandler}
            onClick={preventPropagation}
            className={styles.groupFilterBox}
            type={CONSTANTS.UI.TEXT_FIELD_TYPE}
            placeholder={CONSTANTS.UI.GROUP_DATA_PLACEHOLDER}
          />
          <Icon iconName={CONSTANTS.UI.CROSS_ICON} clicked={resetValues} />
        </div>
        {userDataList}
      </div>
    </div>
  );
};

export default GroupFiltering;

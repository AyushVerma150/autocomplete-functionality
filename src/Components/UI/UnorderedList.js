import React from "react";

import styles from "./UI.module.css";

const UnorderedList = ({ listData }) => {
  return (
    <div>
      <ul className={styles.ulStyle}>
        {listData.map((listItem) => {
          return (
            <div className={styles.liStyle}>
              <li>{listItem.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UnorderedList;

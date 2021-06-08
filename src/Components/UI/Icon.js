import React from "react";

import styles from "./UI.module.css";

const Icon = ({ iconName, clicked }) => {
  return (
    <div className={styles.iconStyle}>
      <i class={iconName} onClick={clicked}></i>
    </div>
  );
};

export default Icon;

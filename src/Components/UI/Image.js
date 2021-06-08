import React from "react";

import styles from "./UI.module.css";

const Image = ({ src }) => {
  return <img src={src} className={styles.imageStyle} alt="not available" />;
};

export default Image;

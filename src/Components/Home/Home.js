import React from "react";

import Image from "../UI/Image";
import UnorderedList from "../UI/UnorderedList";

import CONSTANTS from "../../Constants/Constants";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeDiv}>
      <div className={styles.innerHomeDiv}>
        <div className={styles.leftHalf}>
          <p className={styles.paraHeading}>
            <strong>{CONSTANTS.UI.REACT_HEADING}</strong>
            {CONSTANTS.UI.REACT_PARAGRAPH}
          </p>
          <UnorderedList listData={CONSTANTS.DATA.UPDATES} />
        </div>
        <div className={styles.rightHalf}>
          <p className={styles.paraHeading}>
            {CONSTANTS.UI.ABOUT_ORGANIZATION}
          </p>
          <Image src={CONSTANTS.UI.COMPANY_IMAGE} style={styles.companyImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;

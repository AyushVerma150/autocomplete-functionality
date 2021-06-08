import React from "react";

import Image from "../UI/Image";
import UnorderedList from "../UI/UnorderedList";

import CONSTANTS from "../../Constants/Constants";

import styles from "./Updates.module.css";

const Updates = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: "linear-gradient(to bottom right ,white,gray,white)",
        marginTop: "-5px",
        height: "300px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ left: "0", width: "50%" }}>
          <p className={styles.paraHeading}>
            <strong>React Autocomplete </strong> : A High Performance TextBox
            Component
          </p>
          <UnorderedList listData={CONSTANTS.DATA.UPDATES} />
        </div>
        <div style={{ right: "0", width: "50%" }}>
          <p className={styles.paraHeading}>About The Organization</p>
          <Image
            src="https://www.vtnetzwelt.com/wp-content/uploads/2018/06/logo.svg"
            style={styles.companyImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Updates;

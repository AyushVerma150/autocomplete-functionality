import React from "react";

import UnorderedList from "../UI/UnorderedList";

import CONSTANTS from "../../Constants/Constants";

const Updates = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "34%",
        backgroundColor: "lightgreen",
        borderRadius: "10px",
      }}
    >
      <UnorderedList listData={CONSTANTS.DATA.UPDATES} />
    </div>
  );
};

export default Updates;
